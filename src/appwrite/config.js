import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class AppwriteService {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.APPWRITE_API_URL) // Your Appwrite Endpoint
      .setProject(conf.APPWRITE_PROJECT_ID); // Your project ID
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

    async createPost({ title, content, featuredImage, status, userId }) {
    try {
      // Build payload using only fields expected by the Appwrite collection schema.
      // Remove `slug` and camelCase `featuredImage`/`userId` to avoid "Unknown attribute" errors.
      const payload = {
        title,
        content,
        featuredimage: featuredImage ?? null,
        status,
        userid: userId ?? null,
      };
      console.log('Appwrite.createPost payload:', payload);
      const document = await this.databases.createDocument(
        conf.APPWRITE_DATABASE_ID,
        conf.APPWRITE_COLLECTION_ID,
        ID.unique(),
        payload
      );
      console.log("Document created successfully:", document);
      return document;
    } catch (e) {
      console.error("Error creating document:", e);
      throw e;
    }
  }

    async updatePost(postId, { title, content, featuredImage, status }) {
    try {
      // Get the current post to preserve existing featuredimage if not provided
      const currentPost = await this.databases.getDocument(
        conf.APPWRITE_DATABASE_ID,
        conf.APPWRITE_COLLECTION_ID,
        postId
      );

      const document = await this.databases.updateDocument(
        conf.APPWRITE_DATABASE_ID,
        conf.APPWRITE_COLLECTION_ID,
        postId,
        {
          title,
          content,
          // Use new image if provided, otherwise keep existing one
          featuredimage: featuredImage ?? currentPost.featuredimage,
          status,
        }
      );
      console.log("Document updated successfully:", document);
      return document;
    } catch (e) {
      console.error("Error updating document:", e);
      throw e;
    }
  }

  async deletePost(postId) {
    try {
      await this.databases.deleteDocument(
        conf.APPWRITE_DATABASE_ID,
        conf.APPWRITE_COLLECTION_ID,
        postId
      );
      console.log("Document deleted successfully:", postId);
      return true;
    } catch (e) {
      console.error("Error deleting document:", e);
      throw e;
      return false;
    }
  }

  async getPost(userId) {
    try {
      const document = await this.databases.getDocument(
        conf.APPWRITE_DATABASE_ID,
        conf.APPWRITE_COLLECTION_ID,
        userId
      );
      console.log("Documents fetched successfully:", document);
      return document;
    } catch (e) {
      console.error("Error fetching documents:", e);
      throw e;
      return false;
    }
  }

  async listPosts(querise = [Query.equal("status", "active")]) {
    try {
      const documents = await this.databases.listDocuments(
        conf.APPWRITE_DATABASE_ID,
        conf.APPWRITE_COLLECTION_ID,
        querise
      );
      console.log("Documents fetched successfully:", documents);
      return documents;
    } catch (e) {
      console.error("Error fetching documents:", e);
      throw e;
      return false;
    }
  }

  async uploadFile(file) {
    try {
      const response = await this.storage.createFile(
        conf.APPWRITE_BUCKET_ID,
        ID.unique(),
        file
      );
      console.log("File uploaded successfully:", response);
      return response;
    } catch (e) {
      console.error("Error uploading file:", e);
      throw e;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(conf.APPWRITE_BUCKET_ID, fileId);
      console.log("File deleted successfully:", fileId);
      return true;
    } catch (e) {
      console.error("Error deleting file:", e);
      throw e;
      return false;
    }
  }

  async getFilePreview(fileId) {
    try {
      if (!fileId) {
        console.warn("getFilePreview called with missing fileId:", fileId);
        return null;
      }
      
      // On Appwrite free/hobby plans, image transformations (preview) are blocked.
      // Skip preview and go directly to getFileView which always works.
      console.log("ℹ Attempting to fetch file view URL (skipping preview due to plan limitations)...");
      try {
        const view = await this.storage.getFileView(conf.APPWRITE_BUCKET_ID, fileId);
        console.log("✓ File view URL fetched successfully. Type:", typeof view, "Value:", view);
        return view;
      } catch (viewErr) {
        console.error("✗ getFileView failed:", viewErr);
        return null;
      }
    } catch (e) {
      console.error("✗ Unhandled error in getFilePreview:", e);
      return null;
    }
 }

}

const appwriteService = new AppwriteService();
export default appwriteService;
