import React from "react";
import Head from "./Head";
import MainContainer from "./MainContainer";
import useNowPlaying from "../utils/useNowPlaying";

const Browse = () => {
  useNowPlaying();
  return (
    <div>
      <Head />
      <MainContainer />
    </div>
  );
};

export default Browse;
