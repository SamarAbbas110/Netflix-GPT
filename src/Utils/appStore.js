import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Utils/userSlice";

const appStore = configureStore({
  reducer: {
    user: counterSlice,
  },
});

export default appStore;
