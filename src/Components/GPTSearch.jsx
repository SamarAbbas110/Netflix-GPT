import React from "react";
import GPTSearchBarPage from "./GPTSearchBarPage";
import { BackgroundImage } from "../Utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          className="w-screen h-screen object-cover"
          src={BackgroundImage}
          alt="Background"
        />
      </div>
      <GPTSearchBarPage />
    </div>
  );
};

export default GPTSearch;
