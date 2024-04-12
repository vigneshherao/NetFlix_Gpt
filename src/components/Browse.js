import React from "react";
import Head from "./login/Head";
import MainContainer from "./MainContainer";
import useNowPlaying from "../utils/hooks/useNowPlaying";
import usePopularMvs from "../utils/hooks/usePopularMvs";
import useUpComing from "../utils/hooks/useUpComing";
import useTopRatedMovies from "../utils/hooks/useTopRatedMovies";
import GptSearch from "./gptComponents/GptSearch";
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
