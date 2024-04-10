import React, { useRef } from "react";
import { btnLang } from "../utils/multilingual";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { apiOptions, gptApi } from "../utils/constant";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const lang = useSelector((store) => store?.multilang?.lang);
  const searchValue = useRef(null);
  const dispatch = useDispatch();
  const genAI = new GoogleGenerativeAI(gptApi);

  const movieSearch = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      apiOptions
    );
    const movieDetails = await data.json();
    return movieDetails.results;
  };

  const handleSearch = async () => {
    const query =
      "Act as a movie recommendation system suggest some movies names list based on" +
      searchValue.current.value +
      "6 movies only names ,no need of number ";
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(query);
    const response = await result.response;
    const text = await response.text();
    const movieNamesArray = text
      .trim()
      .split("\n")
      .map((name) => name.replace(/^\d+\.\s*/, "").trim());

    const data = await movieNamesArray.map((movie) => movieSearch(movie));
    const results = await Promise.all(data);
    dispatch(addGptMovieResult(results));
  };

  return (
    <div className="flex justify-center items-center">
      <form
        className="pt-[15%] w-full md:w-1/2 grid grid-cols-12 gap-4 p-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchValue}
          type="text"
          placeholder={btnLang[lang].gptSearchPlaceHolder}
          className="p-4 col-span-9 md:col-span-10 rounded"
        ></input>
        <button
          className="bg-red-700 text-white font-bold col-span-3 p-4 md:col-span-2 rounded"
          onClick={handleSearch}
        >
          {btnLang[lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
