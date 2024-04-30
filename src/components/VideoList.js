import React from "react";
import VideoCard from "./VideoCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../utils/constant";

const VideoList = ({ title, movies }) => {
  if (!movies || !Array.isArray(movies) || movies.length === 0) return null;
  if (movies.length < 2) return null;

  return (
    <div className="lg:px-12">
      <h1 className="pb-2 pl-2 text-lg text-white md:text-3xl md:pb-4 md:pl-12">
        {title}
      </h1>
      <Slider {...settings}>
        {movies &&
          movies.map((movie) => (
            <div key={movie.id}>
              <VideoCard img={movie.poster_path} name={movie?.original_title} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default VideoList;
