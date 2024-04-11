import React, { useState } from "react";
import { imgPoster } from "../utils/constant";
import { watch } from "../utils/stringConstants";
import { Link } from "react-router-dom";

const VideoCard = ({ img, name }) => {
  const [showView, setShowView] = useState(false);

  return (
    <div
      className="ml-2 p-4 sm:p-1 cursor-pointer w-36 md:w-48 transition-transform duration-200 ease-in-out transform sm:hover:scale-125"
      onMouseEnter={() => setShowView(true)}
      onMouseLeave={() => setShowView(false)}
    >
      {showView && (
        <Link to={`/watch/?name=${encodeURIComponent(name)}`}>
          <div className="hidden sm:block absolute top-32 left-16">
            <span className="text-white font-semibold border p-2 rounded-sm">
              {watch}
            </span>
          </div>
        </Link>
      )}
      <Link to={`/watch/?name=${encodeURIComponent(name)}`}>
        {" "}
        <img className="rounded-md" src={imgPoster + img} alt="Poster" />
      </Link>
    </div>
  );
};

export default VideoCard;
