import { apiOptions, upComingMoves } from "../constants/constant";
import { useDispatch } from "react-redux";
import {addUpComingMovies } from "../slice/movieSlice";
import { useEffect } from "react";

const useUpComing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUpComing();
  }, []);

  const fetchUpComing = async () => {
    const data = await fetch(
     upComingMoves,
      apiOptions
    );
    const movies = await data.json();
    dispatch(addUpComingMovies(movies.results));
  };
};

export default useUpComing;
