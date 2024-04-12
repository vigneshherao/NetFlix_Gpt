import { apiOptions } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addVideoDetails } from "../utils/movieSlice";
import { useEffect } from "react";


const useBackGrnVdo = (videoId) => {

  const dispatch = useDispatch();

  useEffect(() => {
    backGroundVideo();
  }, []);

  const backGroundVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${videoId}/videos`,
      apiOptions
    );
    const video = await data.json();
    const videoFilter = video.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = videoFilter.length ? videoFilter[0] : video.results[0];
    dispatch(addVideoDetails(trailer));
  };
};

export default useBackGrnVdo;
