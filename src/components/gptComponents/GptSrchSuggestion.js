import React from "react";
import VideoList from "../videoComponents/VideoList";
import { useSelector } from "react-redux";
import { btnLang } from "../../utils/constants/multilingual";
import DefaultSuggestion from "./DefaultSuggestion";

const GptSrchSuggestion = () => {
  const moviesList = useSelector((store) => store?.gpt?.gptMovies);
  const lang = useSelector((store) => store?.multilang?.lang);

  if (!moviesList) return <DefaultSuggestion />;

  return (
    <div className="pt-[10%] md:px-[2%] md:pt-10 shadow-lg bg-black bg-opacity-30">
      <h2 className="pb-2 pl-2 text-lg text-white md:text-3xl md:pb-4 text-center font-semibold">
        {btnLang[lang]?.gptHeading}
      </h2>
      {moviesList.map((movie, index) => (
        <VideoList key={index} movies={movie}></VideoList>
      ))}
    </div>
  );
};

export default GptSrchSuggestion;
