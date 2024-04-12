import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/slice/userSlice";
import movieReducer from "../utils/slice/movieSlice";
import gptReducer from "../utils/slice/gptSlice";
import multiSlice from "./../utils/slice/multiSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    multilang: multiSlice,
  },
});

export default appStore;
