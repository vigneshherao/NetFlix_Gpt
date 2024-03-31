import React, { useEffect } from "react";
import { apiOptions } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addVideoDetails } from "../utils/videoSlice";

const VideoBackGround = ({ videoId }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.video?.videoDetail);
  useEffect(() => {
    backGroundVideo();
  }, []);

  const backGroundVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${videoId}/videos`,
      apiOptions
    );
    const video = await data.json();
    const videoFilter = video.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = videoFilter.length ? videoFilter[0] : video.results[0];
    dispatch(addVideoDetails(trailer));
  };

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
