import React from 'react'
import {imgPoster} from "../utils/constant"

const VideoCard = ({img}) => {

    if(!img) return;

  return (
    <div className='ml-2 p-2 sm:p-0 cursor-pointer w-36 md:w-48'>
        <img className='rounded-md' src={imgPoster+img}></img>
    </div>
  )
}

export default VideoCard