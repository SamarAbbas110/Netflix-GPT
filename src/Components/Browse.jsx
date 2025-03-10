import React from "react";
import Header from "./Header";
import useMovies from "../customHooks/useMovies";
import MainComponent from "./mainComponent";
import SecondaryComponent from "./secondaryComponent";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const GPTSearchToggle = useSelector((store) => store.gptSearch.useGPTsearch);
  useMovies(); //calling the Custom Hook to fetch movies
  usePopularMovies(); // calling the usePopularMovies Hook to fetch popular movies
  useTopRatedMovies(); // calling the useTopRated Hook to fetch Popular movies
  useUpcomingMovies(); // calling the useUpcomingMovies Hook to fetch upcoming movies
  return (
    <div>
      <Header />
      {GPTSearchToggle ? (
        <GPTSearch />
      ) : (
        <>
          <MainComponent />
          <SecondaryComponent />
        </>
      )}
    </div>
  );
};

export default Browse;
