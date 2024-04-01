import React from "react";
import Head from "./Head";
import MainContainer from "./MainContainer";
import useNowPlaying from "../utils/useNowPlaying";
import usePopularMvs from "../utils/usePopularMvs";
import useUpComing from "../utils/useUpComing";
import useTopRatedMovies from "../utils/useTopRatedMovies";

const Browse = () => {
  useTopRatedMovies();
  useUpComing();
  usePopularMvs();
  useNowPlaying();

  return (
    <div>
      <Head />
      <MainContainer />
    </div>
  );
};

export default Browse;
