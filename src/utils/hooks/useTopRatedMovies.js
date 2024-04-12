import { apiOptions, topRatedMovies } from "../constants/constant";
import { useDispatch } from "react-redux";
import {addTopRatedMovies, addUpComingMovies } from "../slice/movieSlice";
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
