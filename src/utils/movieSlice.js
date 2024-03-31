import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:{}
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        }
    }
})



export const {addNowPlayingMovies} = movieSlice.actions;

export default movieSlice.reducer;


