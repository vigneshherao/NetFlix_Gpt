import React from "react";
import useBackGrnVdo from "../utils/useBackGrnVdo";
import { useSelector } from "react-redux";

const VideoBackGround = ({ videoId }) => {
  useBackGrnVdo(videoId);
  const trailerVideo = useSelector((store) => store.movies?.videoDetail);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${
          trailerVideo?.key
        }?autoplay=1&controls=1&enablejsapi=1&rel=0&version=3${"&mute=1"}`}
        title="YouTube video player"
        autoPlay={true}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
