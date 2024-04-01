import React from "react";
import VideoList from "./VideoList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upComingMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);

  return (
    <div className=" bg-black">
      <div className="sm:-top-52 relative z-20">
        <VideoList title={"New Release"} movies={moviesList}></VideoList>
        <VideoList title={"Get In On the Action"} movies={upcomingMovies}></VideoList>
        <VideoList title={"Trending Now"} movies={popularMovies}></VideoList>
        <VideoList title={"Top Rated Movies"} movies={topRatedMovies}></VideoList>
        <VideoList title={"Night Thriller"} movies={moviesList}></VideoList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
