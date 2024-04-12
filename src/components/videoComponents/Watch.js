import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import WatchDetails from "./WatchDetails";
import Shimmer from "../Shimmer";
import useFetchMovies from "../../utils/hooks/useFetchMovies";

const Watch = () => {
  let [searchParams] = useSearchParams();
  let name = searchParams.get("name");

  const trailerVideo = useSelector((store) => store.movies?.watchVideo);
  const trailerVideos = useSelector(
    (store) => store.movies?.watchMovieDetails[0]
  );

  useFetchMovies(name);

  if (trailerVideos == null) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="bg-black h-screen">
        <Link to={"/browse"}>
          {" "}
          <button className="bg-black absolute z-20 text-white p-2 rounded-sm w-20 top-3  left-2 sm:top-20 sm:left-10 hover:bg-white hover:text-black">
            Back
          </button>
        </Link>
        <iframe
          className="w-screen md:h-screen aspect-video"
          src={`https://www.youtube.com/embed/${
            trailerVideo?.key
          }?autoplay=1&controls=1&enablejsapi=1&rel=0&version=3${"&mute=0"}`}
          title="YouTube video player"
          autoPlay={true}
          allowfullscreen="allowfullscreen"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share,allowfullscreen"
        ></iframe>
        <WatchDetails trailerVideos={trailerVideos} />
      </div>
    </div>
  );
};

export default Watch;
