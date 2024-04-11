import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { apiOptions, imgPoster } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addWatchVideo, addWatchMovies } from "../utils/movieSlice";
import { AiOutlineLike } from "react-icons/ai";
import WatchDetails from "./WatchDetails";

const Watch = () => {
  let [searchParams] = useSearchParams();
  let name = searchParams.get("name");
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.watchVideo);
  const trailerVideos = useSelector(
    (store) => store.movies?.watchMovieDetails[0]
  );

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      apiOptions
    );
    const moviews = await data.json();
    dispatch(addWatchMovies(moviews.results));
    const vdata = await fetch(
      `https://api.themoviedb.org/3/movie/${moviews.results[0].id}/videos`,
      apiOptions
    );
    const video = await vdata.json();
    const videoFilter = video.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = videoFilter.length ? videoFilter[0] : video.results[0];
    dispatch(addWatchVideo(trailer));
  };

  if (trailerVideos == null) {
    return;
  }

  return (
    <div>
      <div className="bg-black h-screen">
       <Link to={"/browse"}> <button className="bg-black absolute z-20 text-white p-2 rounded-sm w-20 top-3  left-2 sm:top-20 sm:left-10 hover:bg-white hover:text-black">Back</button></Link>
        <iframe
          className="w-screen md:h-screen aspect-video"
          src={`https://www.youtube.com/embed/${
            trailerVideo?.key
          }?autoplay=1&controls=1&enablejsapi=1&rel=0&version=3${"&mute=0"}`}
          title="YouTube video player"
          autoPlay={true}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <WatchDetails trailerVideos={trailerVideos}/>
      </div>
    </div>
  );
};

export default Watch;
