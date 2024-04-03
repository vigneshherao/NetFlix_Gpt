import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptButton:false
    },
    reducers:{
        toggleGptBtn:(state,action)=>{
            state.gptButton = !state.gptButton
        }   
    }
})



export const {toggleGptBtn} = gptSlice.actions; 

export default gptSlice.reducer;