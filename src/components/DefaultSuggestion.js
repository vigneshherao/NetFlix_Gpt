import React from "react";
import VideoList from "./VideoList";
import { useSelector } from "react-redux";
import { btnLang } from "../utils/multilingual";

const DefaultSuggestion = () => {
  const upcomingMovies = useSelector((store) => store.movies?.upComingMovies);
  const lang = useSelector((store) => store?.multilang?.lang);
  const isShimmer = useSelector((store) => store?.gpt?.gptShimmer);

  return (
    <div>
      <h2 className="pb-2 pl-2 text-lg text-white md:text-3xl md:pb-4 text-center font-semibold pt-5">
        {isShimmer? btnLang[lang]?.gptShimmer :btnLang[lang]?.defaultSearchHead}
      </h2>
      <VideoList movies={upcomingMovies}></VideoList>
    </div>
  );
};

export default DefaultSuggestion;