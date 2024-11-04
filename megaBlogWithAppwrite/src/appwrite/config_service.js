// Import necessary modules and configurations
import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

// Service class to interact with Appwrite's database and storage
export class Service {
  client = new Client(); // Appwrite client instance
  databases; // Database instance for handling database operations
  storage; // Storage instance for handling file operations

  constructor() {
    // Configure the client with the Appwrite endpoint and project ID
    this.client
      .setEndpoint(config.appwriteApiEndpoint) // Sets API endpoint
      .setProject(config.appwriteProjectId); // Specifies project ID

    // Initialize database and storage instances
    this.databases = new Databases(this.client); // Database instance
    this.storage = new Storage(this.client); // Storage instance
  }

  // Creates a new post document in the database
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId, // Database ID
        config.appwriteCollectionId, // Collection ID
        slug, // Document ID (slug)
        {
          title, // Post title
          content, // Post content
          featuredImage, // Associated image URL
          status, // Post status (e.g., active/inactive)
          userId, // ID of the user creating the post
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error: ", error);
    }
  }

  // Updates an existing post document by slug
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId, // Database ID
        config.appwriteCollectionId, // Collection ID
        slug, // Document ID (slug)
        {
          title, // Updated title
          content, // Updated content
          featuredImage, // Updated image
          status, // Updated status
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error: ", error);
    }
  }

  // Deletes a post document by its slug
  async deletePost({ slug }) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId, // Database ID
        config.appwriteCollectionId, // Collection ID
        slug // Document ID
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost :: error: ", error);
      return false;
    }
  }

  // Retrieves a post document by its slug
  async getPost({ slug }) {
    try {
      return await this.databases.getDocument(
        // Corrected to getDocument
        config.appwriteDatabaseId, // Database ID
        config.appwriteCollectionId, // Collection ID
        slug // Document ID
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error: ", error);
      return false;
    }
  }

  // Lists all posts that match the specified query criteria
  async listPost({ queries = [Query.equal("status", "active")] }) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId, // Database ID
        config.appwriteCollectionId, // Collection ID
        queries // Query criteria
      );
    } catch (error) {
      console.log("Appwrite service :: listPost :: error: ", error);
      return false;
    }
  }

  // Uploads a file to Appwrite's storage bucket
  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        config.appwriteBucketId, // Bucket ID
        ID.unique(), // Unique file ID
        file // File to upload
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error: ", error);
      return false;
    }
  }

  // Deletes a file from storage by its file ID
  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error: ", error);
      return false;
    }
  }

  // Gets a preview URL for a file by its file ID
  getFilePreview(fileId) {
    return this.storage.getFilePreview(config.appwriteBucketId, fileId);
  }
}

// Export an instance of the Service class for use in the app
const service = new Service();

export default service;
