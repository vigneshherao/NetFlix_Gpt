import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import movieReducer from "../utils/movieSlice";
import videoSlice from "./videoSlice";


const appStore = configureStore({
    reducer:{   
        user:userReducer,
        movies:movieReducer,
        video:videoSlice,
    }
})


export default appStore;