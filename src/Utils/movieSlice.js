import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPoplularMovies: null,
    nowPlayingTrailers: null,
    nowTopRatedMovies: null,
    nowUpcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPopularMovies: (state, action) => {
      state.nowPoplularMovies = action.payload;
    },
    addNowPlayingTrailers: (state, action) => {
      state.nowPlayingTrailers = action.payload;
    },
    addNowTopRatedMovies: (state, action) => {
      state.nowTopRatedMovies = action.payload;
    },
    addNowUpcomingMovies: (state, action) => {
      state.nowUpcomingMovies = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const {
  addNowPlayingMovies,
  addNowPlayingTrailers,
  addNowPopularMovies,
  addNowTopRatedMovies,
  addNowUpcomingMovies,
} = movieSlice.actions;
