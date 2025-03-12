import { MOVIE_API } from "../Utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addNowTopRatedMovies } from "../Utils/movieSlice";
const useTopRatedMovies = () => {
  const dispatch = useDispatch(); //useDispatch hook is used to dispatch actions to the Redux store.
  //calling TMDB API
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      MOVIE_API
    );
    const json = await data.json();
    dispatch(addNowTopRatedMovies(json.results)); //addNowPlayingMovies action is dispatched with the fetched movies.
  };
  useEffect(() => {
    getTopRatedMovies(); //calling getMovies() function inside Use Effect to run it once when the component mounts.
  }, []);
};

export default useTopRatedMovies;
