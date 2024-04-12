import { addWatchVideo, addWatchMovies } from "../utils/movieSlice";
import { apiOptions } from "../utils/constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { movieDetail, movieVideo } from "../utils/constant";

const useFetchMovies = (name) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieDetails();
  }, [name]);

  const fetchMovieDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      apiOptions
    );
    const moviews = await data.json();
    dispatch(addWatchMovies(moviews.results));
    const vdata = await fetch(
      movieDetail + moviews.results[0].id + movieVideo,
      apiOptions
    );
    const video = await vdata.json();
    const videoFilter = video.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = videoFilter.length ? videoFilter[0] : video.results[0];
    dispatch(addWatchVideo(trailer));
  };
};

export default useFetchMovies;
