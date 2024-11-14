// Define configuration settings for the Appwrite API, Project, Database, Collection, and Storage Bucket
const config = {
  // Sets the API endpoint URL, needed for connecting to the correct Appwrite server
  appwriteApiEndpoint: String(import.meta.env.VITE_APPWRITE_API_ENDPOINT),
  // Project ID, ensures requests are scoped to the specific Appwrite project
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  // Database ID, identifies the database to access within Appwrite
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  // Collection ID, used to interact with specific collections in the database
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  // Bucket ID, identifies the storage bucket for handling file uploads and downloads
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

// Exports the config object to be used throughout the app
export default config;

// Reason and Why Use
// Reason: Centralizes Appwrite configuration, making it easy to manage API settings in one place.
// Why use: Simplifies connecting to Appwrite services, especially for large apps, by keeping credentials organized and consistent.
