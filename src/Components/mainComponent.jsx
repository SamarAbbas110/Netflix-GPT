import React from "react";
import VideoBackground from "./videoBackground";
import VideoTitle from "./videoTitle";
import { useSelector } from "react-redux";

const MainComponent = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies); // Get the first movie from the now playing movies list which is store in Redux Store
  if (!movies) return null; //If movies is not loaded yet, return null

  const mainMovies = movies[0]; // Assuming first movie is the main movie
  console.log(mainMovies); //For Debugging Purposes
  const { original_title, overview , id} = mainMovies;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground  movieID={id}/>
    </div>
  );
};

export default MainComponent;
