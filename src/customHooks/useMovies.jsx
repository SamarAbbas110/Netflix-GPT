import { MOVIE_API } from "../Utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";
const useMovies = () => {
    const dispatch = useDispatch(); //useDispatch hook is used to dispatch actions to the Redux store.
    //calling TMDB API
    const getMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?",
        MOVIE_API
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results)); //addNowPlayingMovies action is dispatched with the fetched movies.
    };
    useEffect(() => {
      getMovies(); //calling getMovies() function inside Use Effect to run it once when the component mounts.
    }, []);
}

export default useMovies