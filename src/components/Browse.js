import React from "react";
import Head from "./Head";
import MainContainer from "./MainContainer";
import useNowPlaying from "../utils/useNowPlaying";
import usePopularMvs from "../utils/usePopularMvs";
import useUpComing from "../utils/useUpComing";
import useTopRatedMovies from "../utils/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const isGptOn = useSelector((store) => store.gpt.gptButton);
  console.log(isGptOn);
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
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
