import React from "react";
import { imgPoster } from "../utils/constant";
import { isInfoChange } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const MovieInfo = ({ movieDetails }) => {
  const dispatch = useDispatch();
  const { poster_path, original_title, overview, release_date } = movieDetails;

  
  return (
    <div className="h-[80vh] z-30 absolute top-2 md:top-24 flex flex-col md:flex-row justify-evenly px-5 md:px-10">
      <div className="hidden md:block md:w-1/2 relative mb-4 md:mb-0">
        <img
          className="h-full w-full object-cover"
          src={imgPoster + poster_path}
          alt="Movie Poster"
        />
      </div>
      <div className="md:w-1/2 bg-black text-white p-5">
        <div className="p-4 md:p-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl md:text-3xl font-bold">{original_title}</h2>
            <button
              className="bg-white py-2 px-4 rounded"
              onClick={() => dispatch(isInfoChange())}
            >
              ❌
            </button>
          </div>
          <p className="text-sm md:text-base">{overview}</p>
          <p className="mt-2 md:mt-4">
            <span className="font-bold">Release Date:</span> {release_date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
