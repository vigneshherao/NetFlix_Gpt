import React from "react";
import { netflixBackGround } from "../../utils/constants/constant";
import GptSearchBar from "./GptSearchBar";
import GptSrchSuggestion from "./GptSrchSuggestion";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute w-full h-full -z-10">
        <img
          className="brightness-50 bg-opacity-80 w-full h-full object-cover fixed"
          src={netflixBackGround}
        ></img>
      </div>
      <div className="pt-[30%] md:pt-0">
        <GptSearchBar />
        <GptSrchSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
