import React from 'react'
import { btnLang } from "../utils/multilingual";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const lang = useSelector((store)=>store?.multilang?.lang);

  console.log(lang)
  return (
    <div className='flex justify-center items-center'>
        <form className='pt-[15%] w-full md:w-1/2 grid grid-cols-12 gap-4 p-2' onSubmit={(e)=>e.preventDefault()}>
          <input type='text' placeholder={btnLang[lang].gptSearchPlaceHolder} className='p-4 col-span-9 md:col-span-10 rounded'></input>
          <button className='bg-red-700 text-white font-bold col-span-3 p-4 md:col-span-2 rounded'>{btnLang[lang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar