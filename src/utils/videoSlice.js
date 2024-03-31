import { createSlice } from "@reduxjs/toolkit";



const videoSlice = createSlice({
    name:"video",
    initialState:{
        videoDetail:{

        }
    },
    reducers:{
        addVideoDetails:(state,action)=>{
            state.videoDetail = action.payload;
        }
    }
})



export const {addVideoDetails} = videoSlice.actions;

export default videoSlice.reducer;