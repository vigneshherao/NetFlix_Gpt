import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:{},
        videoDetail:{}
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addVideoDetails:(state,action)=>{
            state.videoDetail = action.payload;
        }
    }
})



export const {addNowPlayingMovies,addVideoDetails} = movieSlice.actions;

export default movieSlice.reducer;


