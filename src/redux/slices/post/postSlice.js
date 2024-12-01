import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPosts } from '../../queries/posts';

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: null
}

export const fetchPosts = createAsyncThunk("posts/fetch",
    async () => {
        const posts = await getPosts();
        return posts;
    })

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
    }
})
// export const { increment, decrement, incrementByAmount } = postSlice.actions;

export default postSlice.reducer;