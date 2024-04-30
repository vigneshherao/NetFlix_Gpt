import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptButton: false,
    gptMovies: null,
    gptShimmer:false
  },
  reducers: {
    toggleGptBtn: (state, action) => {
      state.gptButton = !state.gptButton;
    },
    addGptMovieResult: (state, action) => {
      state.gptMovies = action.payload;
    },
    checkGptShimmer: (state, action) => {
      state.gptShimmer = !state.gptShimmer;
    },
  },
});

export const { toggleGptBtn, addGptMovieResult ,checkGptShimmer} = gptSlice.actions;

export default gptSlice.reducer;
