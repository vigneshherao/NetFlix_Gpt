import React from "react";
import VideoList from "./VideoList";
import { useSelector } from "react-redux";

const DefaultSuggestion = () => {
  const upcomingMovies = useSelector((store) => store.movies?.upComingMovies);

  return (
    <div>
      <h2 className="pb-2 pl-2 text-lg text-white md:text-3xl md:pb-4 text-center font-semibold pt-5">
        Search For Your Fav Movies!
      </h2>
      <VideoList movies={upcomingMovies}></VideoList>
    </div>
  );
};

export default DefaultSuggestion;
