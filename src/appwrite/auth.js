import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.APPWRITE_API_URL)
      .setProject(conf.APPWRITE_PROJECT_ID);

    this.account = new Account(this.client);
  }

  // Create user
  async createUser(email, password, name) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      console.log("User created successfully:", user);

      if (user) {
        return this.loginUser(email, password);
      }
      return user;

    } catch (e) {
      console.error("Error creating user:", e);
      throw e;
    }
  }

  // Login user
  async loginUser(email, password) {
    try {
      const session = await this.account.createEmailPasswordSession({
        email,
        password,
      });

      console.log("User logged in successfully:", session);
      return session;

    } catch (e) {
      console.error("Error logging in user:", e);
      throw e;
    }
  }

  // Get current user
  async getCurrentUser() {
    try {
      const user = await this.account.get();
      console.log("Current user:", user);
      return user;

    } catch (e) {
      console.error("Error fetching current user:", e);
      return null;
    }
  }

  // Logout user
  async logoutUser() {
    try {
      await this.account.deleteSessions();
      console.log("User logged out successfully");
    } catch (e) {
      console.error("Error logging out user:", e);
      throw e;
    }
  }
}

const authService = new AuthService();
export default authService;
