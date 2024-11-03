// Import necessary modules and configurations
import config from "../config/config";
import { Client, Account, ID } from "appwrite";

// Define AuthService class to handle user authentication and account management
export class AuthService {
  client = new Client(); // Initialize an Appwrite client instance
  account; // Holds the Account instance for user-related operations

  constructor() {
    // Configure Appwrite client with endpoint and project ID from config
    this.client
      .setEndpoint(config.appwriteApiEndpoint) // Sets the API endpoint; essential to direct requests to the correct server
      .setProject(config.appwriteProjectId); // Sets project ID; ensures that requests are scoped to the specific Appwrite project

    this.account = new Account(this.client); // Initialize Account instance for authentication actions
  }

  // Method to create a new user account
  async createAccount({ email, password, name }) {
    try {
      // Attempt to create a user account with a unique ID, email, password, and name
      const userAccount = await this.account.create(
        ID.unique(), // Generates a unique ID for each user, essential for uniquely identifying accounts
        email, // Email is used as the primary identifier for login
        password, // Password is required for account security
        name // Name is optional but helps personalize the user experience
      );

      if (userAccount) {
        // If account creation is successful, automatically log the user in
        return this.login({ email, password }); // Streamlines experience by logging user in immediately upon successful registration
      } else {
        throw userAccount; // If account creation fails, throw the error to the catch block
      }
    } catch (error) {
      // Logs error for debugging; helps track issues with account creation
      console.log("Appwrite service :: createAccount :: error: ", error);
    }
  }

  // Method to log in a user with their email and password
  async login({ email, password }) {
    try {
      // Creates a session for the user, which logs them in
      return await this.account.createEmailPasswordSession(email, password); // Session creation is required to maintain login state
    } catch (error) {
      // Logs error for debugging purposes if login fails
      console.log("Appwrite service :: login :: error: ", error);
    }
  }

  // Method to fetch the currently logged-in user's details
  async getCurrentUser() {
    try {
      // Retrieves user data for the current session; useful for showing user-specific data
      return await this.account.get();
    } catch (error) {
      // Logs error if unable to retrieve user data
      console.log("Appwrite service :: getCurrentUser :: error: ", error);
    }
    // If no user data is found, returns null; calling functions can handle it accordingly
    return null;
  }

  // Method to log out the current user by deleting their session
  async logout() {
    try {
      // Deletes all sessions for the current user; this logs the user out
      await this.account.deleteSessions(); // Essential for securely logging out and clearing any stored sessions
    } catch (error) {
      // Logs error for debugging if logout fails
      console.log("Appwrite service :: logout :: error: ", error);
    }
  }
}

// Single instance of AuthService to maintain centralized control over authentication in the app
const authService = new AuthService();

export default authService; // Exported for use in other parts of the app
