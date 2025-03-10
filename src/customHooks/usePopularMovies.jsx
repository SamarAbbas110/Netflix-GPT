import { MOVIE_API } from "../Utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPopularMovies } from "../Utils/movieSlice";
const usePopularMovies = () => {
  const dispatch = useDispatch(); //useDispatch hook is used to dispatch actions to the Redux store.
  //calling TMDB API
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      MOVIE_API
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPopularMovies(json.results)); //addNowPlayingMovies action is dispatched with the fetched movies.
  };
  useEffect(() => {
    getPopularMovies(); //calling getMovies() function inside Use Effect to run it once when the component mounts.
  }, []);
};

export default usePopularMovies;
