import { createSlice, createSelector } from '@reduxjs/toolkit';

// State for the slice.
const initialState = {
    searchTerm: '',
};


// RedditSlice
const redditSlice = createSlice({
    name: 'redditPosts',
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
    },
});


// Exporting actions from redditSlice
export const {
    setSearchTerm,
} = redditSlice.actions;


// Exporting the reducer from redditSlice.
export default redditSlice.reducer;