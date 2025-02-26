import React from "react";
import Header from "./Header";
import useMovies from "../customHooks/useMovies";
import MainComponent from "./mainComponent";
import SecondaryComponent from "./secondaryComponent";

const Browse = () => {
  useMovies(); //calling the Custom Hook to fetch movies
  return (
    <div>
      <Header />
      <MainComponent />
      <SecondaryComponent />
    </div>
  ); 
};

export default Browse;
