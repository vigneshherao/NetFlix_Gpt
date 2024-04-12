import { useDispatch } from "react-redux";
import { apiOptions, popularMovies } from "../constants/constant";
import { useEffect } from "react";
import { addPopularMovies } from "../slice/movieSlice";

const usePopularMvs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fecthPopular();
  }, []);

  const fecthPopular = async () => {
    const data = await fetch(
        popularMovies,
      apiOptions
    );
    const dataMovies = await data.json();
    dispatch(addPopularMovies(dataMovies.results));
  };
};

export default usePopularMvs;
