import React from 'react'
import VideoList from "./VideoList";
import { useSelector } from "react-redux";
import { btnLang } from '../utils/multilingual';

const GptSrchSuggestion = () => {

  const moviesList = useSelector((store) => store?.movies?.nowPlayingMovies);
  const lang = useSelector((store)=>store?.multilang?.lang)
  console.log(lang)

  return (
    <div className='pt-[20%] md:px-[2%] md:pt-10 '>
      <h2 className="pb-2 pl-2 text-lg text-white md:text-3xl md:pb-4 text-center font-semibold">{btnLang[lang].gptHeading}</h2>
        <VideoList  movies={moviesList}></VideoList>
        <VideoList  movies={moviesList}></VideoList>
    </div>
  )
}

export default GptSrchSuggestion