import React from "react";
import Head from "./Head";
import MainContainer from "./MainContainer";
import useNowPlaying from "../utils/useNowPlaying";
import usePopularMvs from "../utils/usePopularMvs";
import useUpComing from "../utils/useUpComing";
import useTopRatedMovies from "../utils/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const isGptOn = useSelector((store) => store.gpt.gptButton);
  useTopRatedMovies();
  useUpComing();
  usePopularMvs();
  useNowPlaying();

  return (
    <div>
      <Head />
      {isGptOn ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
