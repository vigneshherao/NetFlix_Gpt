import React from "react";
import VideoList from "./VideoList";
import { btnLang } from "../utils/multilingual";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upComingMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const lang = useSelector((store)=>store?.multilang?.lang);

  return (
    <div className=" bg-black">
      <div className="sm:-top-52 relative z-20">
        <VideoList title={btnLang[lang].homePageHead1} movies={moviesList}></VideoList>
        <VideoList title={btnLang[lang].homePageHead2} movies={upcomingMovies}></VideoList>
        <VideoList title={btnLang[lang].homePageHead3} movies={popularMovies}></VideoList>
        <VideoList title={btnLang[lang].homePageHead4} movies={topRatedMovies}></VideoList>
        <VideoList title={btnLang[lang].homePageHead5} movies={moviesList}></VideoList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
