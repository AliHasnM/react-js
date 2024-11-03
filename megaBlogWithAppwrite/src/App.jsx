const App = () => {
  console.log(import.meta.env.VITE_APPWRITE_API_ENDPOINT);
  console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID);
  console.log(import.meta.env.VITE_APPWRITE_DATABASE_ID);
  console.log(import.meta.env.VITE_APPWRITE_COLLECTION_ID);
  console.log(import.meta.env.VITE_APPWRITE_BUCKET_ID);

  return (
    <div>
      <h1>A Blog App With Appwrite</h1>
    </div>
  );
};

export default App;
