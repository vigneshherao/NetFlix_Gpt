import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import movieReducer from "../utils/movieSlice";
import gptReducer from "../utils/gptSlice";
import multiSlice from "./multiSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    multilang: multiSlice,
  },
});

export default appStore;
