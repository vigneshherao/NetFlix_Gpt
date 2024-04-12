import React from "react";
import { apiOptions, imgPoster } from "../utils/constant";
const WatchDetails = ({ trailerVideos }) => {
  const { original_title, vote_count, vote_average, overview, poster_path } =
    trailerVideos;
  return (
    <div className="md:hidden">
      <h3 className="text-lg text-white p-5 text-center font-semibold ">
        {original_title}
      </h3>
      <p className="text-sm text-white text-justify justify-center p-3 font-extralight border mb-3">
        {overview}
      </p>
      <div className="flex justify-between px-3 m-3">
        <p className="text-white">👍{vote_count}</p>
        <p className="text-white">▶️{vote_average}</p>
      </div>
      <img src={imgPoster + poster_path}></img>
    </div>
  );
};

export default WatchDetails;
