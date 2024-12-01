import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/post/postSlice";

// this is store
const store = configureStore({
    reducer: {
        posts: postReducer
    }
})

export default store;