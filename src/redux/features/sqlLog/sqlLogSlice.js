import initialState from './initialState';
import { createSlice } from '@reduxjs/toolkit';
import fetchLogs from './thunks/fetchLogs';
import loadMore from './thunks/loadMore';

const thunks = [
    fetchLogs,
    loadMore,
];

const sqlLogSlice = createSlice({
    name: 'sqlLogs',
    initialState,
    reducers: {
        // loadMore: (state, _action) => {
        //     state.pagination.size += 25;
        // }
    },
    extraReducers: (builder) => {

        builder.addCase(fetchLogs.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            state.data = action.payload;
        }).addCase(loadMore.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            state.data = [...state.data, ...action.payload];
            state.pagination.index++;
        });

        thunks.forEach(x => {
            builder.addCase(x.pending, (state, _action) => {
                state.loading = true;
                state.error = '';
            });
            builder.addCase(x.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.data = [];
            });    
        })
    }
});

export default sqlLogSlice.reducer; // default export
// export const { loadMore } = sqlLogSlice.actions; // export sync reducers