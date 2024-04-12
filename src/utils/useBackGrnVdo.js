import { apiOptions } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addVideoDetails } from "../utils/movieSlice";
import { useEffect } from "react";
import { movieDetail, movieVideo } from "../utils/constant";

const useBackGrnVdo = (videoId) => {
  const backGroundVideoExits = useSelector(
    (store) => store?.store?.movies?.videoDetail
  );

  const dispatch = useDispatch();

  useEffect(() => {
    !backGroundVideoExits && backGroundVideo();
  }, []);

  const backGroundVideo = async () => {
    const data = await fetch(movieDetail + videoId + movieVideo, apiOptions);
    const video = await data.json();
    const videoFilter = video.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = videoFilter.length ? videoFilter[0] : video.results[0];
    dispatch(addVideoDetails(trailer));
  };
};

export default useBackGrnVdo;
