import { useDispatch } from "react-redux";
import { apiOptions } from "../utils/constant";
import { useEffect } from "react";
import { addPopularMovies } from "./movieSlice";

const usePopularMvs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fecthPopular();
  }, []);

  const fecthPopular = async () => {
    const data = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      apiOptions
    );
    const dataMovies = await data.json();
    dispatch(addPopularMovies(dataMovies.results));
  };
};

export default usePopularMvs;
