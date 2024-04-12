import { apiOptions, upComingMoves } from "../utils/constant";
import { useDispatch } from "react-redux";
import {addUpComingMovies } from "../utils/movieSlice";
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
