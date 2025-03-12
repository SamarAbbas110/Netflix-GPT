import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Utils/userSlice";
import movieSlice from "../Utils/movieSlice";
import GptSearchSlice from '../Utils/GptSearchSlice';
import getLang from "../Utils/configSlice"

const appStore = configureStore({
  reducer: {
    user: counterSlice,
    movies: movieSlice,
    gptSearch : GptSearchSlice,
    config : getLang,
  },
});

export default appStore;
