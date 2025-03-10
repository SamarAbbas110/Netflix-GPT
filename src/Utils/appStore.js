import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Utils/userSlice";
import movieSlice from "../Utils/movieSlice";
import GptSearchSlice from '../Utils/GptSearchSlice';

const appStore = configureStore({
  reducer: {
    user: counterSlice,
    movies: movieSlice,
    gptSearch : GptSearchSlice,
  },
});

export default appStore;
