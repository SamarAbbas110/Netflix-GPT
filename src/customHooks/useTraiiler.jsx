import { useEffect } from "react";
import { addNowPlayingTrailers } from "../Utils/movieSlice";
import { MOVIE_API } from "../Utils/constants";
import { useDispatch } from "react-redux";
const useTrailers = (movieID) => {
  const dispatch = useDispatch();
  const getMovieId = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieID
          +
        "/videos?language=en-US",
      MOVIE_API
    );
    const response = await data.json();

    const trailer = response.results.filter(
      (video) => video.type === "Trailer"
    ); // filter out trailer video
    const trailerVideo = trailer.length ? trailer[0] : response.results[0]; // use first video if no trailer found
    dispatch(addNowPlayingTrailers(trailerVideo));
  };

  useEffect(() => {
    getMovieId();
  }, []);
};

export default useTrailers;