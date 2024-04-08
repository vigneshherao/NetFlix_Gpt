import React from "react";
import VideoCard from "./VideoCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../utils/constant";

const VideoList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="pb-2 pl-2 text-lg text-white md:text-3xl md:pb-4 md:pl-12">
        {title}
      </h1>
      <Slider {...settings}>
        {movies &&
          movies.map((movie) => (
            <div key={movie.id}>
              <VideoCard img={movie.poster_path} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default VideoList;
