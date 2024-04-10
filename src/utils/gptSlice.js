import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptButton:false,
        gptMovies:null
    },
    reducers:{
        toggleGptBtn:(state,action)=>{
            state.gptButton = !state.gptButton
        },
        addGptMovieResult:(state,action)=>{
            state.gptMovies = action.payload
        } 
    }
})



export const {toggleGptBtn,addGptMovieResult} = gptSlice.actions; 

export default gptSlice.reducer;