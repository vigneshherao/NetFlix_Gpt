import React from "react";
import { BsPlayFill } from "react-icons/bs";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black">
      <h2 className="font-bold text-4xl">{title}</h2>
      <p className="sm:w-1/4">{description}</p>
      <div className="flex p-2 md:p-4">
        <button className="justify-center items-center hover:bg-opacity-80 px-2 md:px-4 py-2 bg-white text-black rounded-md w-[100px] min-w-[100px] flex">
          Play <BsPlayFill />
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
