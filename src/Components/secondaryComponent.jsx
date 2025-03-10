import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryComponent = () => {
  const movies = useSelector((state) => state.movies); // Assuming movies is a Redux state

  return (
    <div className=" bg-black">
      <div className="-mt-80 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.nowPoplularMovies} />
        <MovieList title={"Top Rated"} movies={movies.nowTopRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowUpcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryComponent;  
