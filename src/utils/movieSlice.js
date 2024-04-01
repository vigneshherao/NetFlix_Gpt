import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:{},
        videoDetail:{},
        popularMovies:{},
        upComingMovies:{},
        topRatedMovies:{}
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addVideoDetails:(state,action)=>{
            state.videoDetail = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        },
        addUpComingMovies:(state,action)=>{
            state.upComingMovies = action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload;
        }

    }
})



export const {addNowPlayingMovies,addVideoDetails,addPopularMovies,addUpComingMovies,addTopRatedMovies} = movieSlice.actions;

export default movieSlice.reducer;


