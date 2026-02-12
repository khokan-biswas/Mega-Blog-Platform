import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";
// import settingsReducer from "./settingsSlice";
// import dataReducer from "./dataSlice";
import authReducer from "./authSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export default store;