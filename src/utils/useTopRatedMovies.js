import { apiOptions, topRatedMovies } from "../utils/constant";
import { useDispatch } from "react-redux";
import {addTopRatedMovies, addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  const fetchTopRatedMovies = async () => {
    const data = await fetch(
      topRatedMovies,
      apiOptions
    );
    const movies = await data.json();
    dispatch(addTopRatedMovies(movies.results));
  };
};

export default useTopRatedMovies;
