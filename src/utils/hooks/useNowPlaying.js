import { apiOptions, nowPlayingAPi } from "../constants/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../slice/movieSlice";
import { useEffect } from "react";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNowPlayingMvs();
  }, []);

  const fetchNowPlayingMvs = async () => {
    const data = await fetch(
      nowPlayingAPi,
      apiOptions
    );
    const movies = await data.json();
    dispatch(addNowPlayingMovies(movies.results));
  };
};

export default useNowPlaying;
