import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Utils/userSlice";
import movieSlice from "../Utils/movieSlice";

const appStore = configureStore({
  reducer: {
    user: counterSlice,
    movies: movieSlice,
  },
});

export default appStore;
