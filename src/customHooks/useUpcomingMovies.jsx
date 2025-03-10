import { MOVIE_API } from "../Utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowUpcomingMovies } from "../Utils/movieSlice";
const useUpcomingMovies = () => {
  const dispatch = useDispatch(); //useDispatch hook is used to dispatch actions to the Redux store.
  //calling TMDB API
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      MOVIE_API
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowUpcomingMovies(json.results)); //addNowPlayingMovies action is dispatched with the fetched movies.
  };
  useEffect(() => {
    getUpcomingMovies(); //calling getMovies() function inside Use Effect to run it once when the component mounts.
  }, []);
};

export default useUpcomingMovies;
