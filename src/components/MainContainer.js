import React from "react";
import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";
import SecondaryContainer from "./SecondaryContainer";


const MainContainer = () => {

  const nowPlaying = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!nowPlaying || !nowPlaying.length) return null;

  const mainVideoPlayer = nowPlaying[7]? nowPlaying[7]:nowPlaying[Math.floor(Math.random() * 20)];

  if (!mainVideoPlayer) return null;
  
  const { title, overview, id } = mainVideoPlayer;

  return (
    <div>
      <VideoTitle title={title} description={overview} />
      <VideoBackGround videoId={id} />
      <SecondaryContainer/>
    </div>
  );
};

export default MainContainer;
