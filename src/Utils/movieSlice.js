import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingTrailers: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlayingTrailers: (state, action) => {
      state.nowPlayingTrailers = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addNowPlayingMovies , addNowPlayingTrailers} = movieSlice.actions;
 