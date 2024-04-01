import React from "react";
import VideoList from "./VideoList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const moviesList = useSelector((store) => store.movies?.nowPlayingMovies);

  console.log(moviesList);

  return (
    <div className=" bg-black">
      <div className="sm:-top-52 relative z-20">
        <VideoList title={"Now Playing"} movies={moviesList}></VideoList>
        <VideoList title={"Now Playing"} movies={moviesList}></VideoList>
        <VideoList title={"Now Playing"} movies={moviesList}></VideoList>
        <VideoList title={"Now Playing"} movies={moviesList}></VideoList>
        <VideoList title={"Now Playing"} movies={moviesList}></VideoList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
