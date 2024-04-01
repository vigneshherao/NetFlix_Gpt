import React from "react";
import VideoCard from "./VideoCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoList = ({ title, movies }) => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="pb-2 pl-2 text-lg text-white md:text-3xl md:pb-4">
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
