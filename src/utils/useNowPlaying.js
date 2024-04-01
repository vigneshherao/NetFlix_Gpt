import { apiOptions } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNowPlayingMvs();
  }, []);

  const fetchNowPlayingMvs = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      apiOptions
    );
    const movies = await data.json();
    dispatch(addNowPlayingMovies(movies.results));
  };
};

export default useNowPlaying;
