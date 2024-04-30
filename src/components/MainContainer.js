import React from "react";
import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "./Footer.js";

const MainContainer = () => {
  const nowPlaying = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!nowPlaying || !nowPlaying.length) return null;

  const mainVideoPlayer = nowPlaying[Math.floor(Math.random() * 20)];

  // nowPlaying[6]? nowPlaying[6]:

  if (!mainVideoPlayer) return null;

  const { title, overview, id } = mainVideoPlayer;

  return (
    <div className="pt-16 sm:pt-0 bg-black w-screen">
      <VideoTitle title={title} description={overview} />
      <VideoBackGround videoId={id} details={mainVideoPlayer} />
      <SecondaryContainer />
      <Footer />
    </div>
  );
};

export default MainContainer;
