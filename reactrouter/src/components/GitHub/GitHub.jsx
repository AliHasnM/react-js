// import { useEffect, useState } from "react"; // Commented out as useEffect and useState are not being used in the current version

import { useLoaderData } from "react-router-dom"; // Import useLoaderData to fetch data passed by the loader

const GitHub = () => {
  //     const [data, setData] = useState([]); // Commented out state management using useState
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/AliHasnM") // Fetch GitHub user data
  //       .then((res) => res.json()) // Convert response to JSON
  //       .then((data) => {
  //         console.log(data); // Log data for debugging
  //         setData(data); // Store data in state
  //       });
  //   });

  const data = useLoaderData(); // Fetch data from the loader

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      GitHub Followers: {data.followers} {/* Display number of followers */}
      <img src={data.avatar_url} alt="GitHub Pic" width={300} />{" "}
      {/* Display GitHub profile picture */}
    </div>
  );
};

export default GitHub;

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/AliHasnM"); // Fetch GitHub user data from API
  return response.json(); // Return the JSON response
};

/*
Notes:
- useLoaderData: Utilized to retrieve data from the loader function and pass it to the component.
- GitHub API: The component fetches user data like followers count and profile picture using GitHub's API.
- Commented Code: The useEffect and useState hooks are commented out, showing a previous method of fetching and handling data.
*/
