import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPostById, getPosts } from '../../queries/posts';

const initialState = {
    posts: [],
    selectedPost: null,
    isLoading: false,
    isError: false,
    error: null
}

export const fetchPosts = createAsyncThunk("posts/fetch",
    async () => {
        const posts = await getPosts();
        return posts;
    })

export const fetchPostById = createAsyncThunk("post/fetchById",
    async (id) => {
        const post = await getPostById(id);
        return post;
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
            .addCase(fetchPostById.pending, (state, action) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.selectedPost = action.payload;
            })
            .addCase(fetchPostById.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
    }
})
// export const { increment, decrement, incrementByAmount } = postSlice.actions;

export default postSlice.reducer;