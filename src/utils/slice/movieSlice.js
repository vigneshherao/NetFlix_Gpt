import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: {},
    videoDetail: {},
    popularMovies: {},
    upComingMovies: {},
    topRatedMovies: {},
    watchMovieDetails: {},
    watchVideo: {},
    isInfo: false,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addVideoDetails: (state, action) => {
      state.videoDetail = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.upComingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addWatchMovies: (state, action) => {
      state.watchMovieDetails = action.payload;
    },
    addWatchVideo: (state, action) => {
      state.watchVideo = action.payload;
    },
    isInfoChange: (state, action) => {
      state.isInfo = !state.isInfo;
    },
  },
});

export const {
  addNowPlayingMovies,
  addVideoDetails,
  addPopularMovies,
  addUpComingMovies,
  addTopRatedMovies,
  addWatchMovies,
  addWatchVideo,
  isInfoChange,
} = movieSlice.actions;

export default movieSlice.reducer;
