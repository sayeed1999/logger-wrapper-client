import initialState from "./initialState";
import {createSlice} from "@reduxjs/toolkit";
import fetchLogs from "./thunks/fetchLogs";
import loadMore from "./thunks/loadMore";

const thunks = [fetchLogs, loadMore];

const requestLogSlice = createSlice({
  name: "requestLogs",
  initialState,
  reducers: {
    loadMore: (state, _action) => {
        state.pagination.size += initialState.pagination.size;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogs.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.data = action.payload;
      })
      .addCase(loadMore.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.data = [...state.data, ...action.payload];
        console.log('state-data', state.data);
        state.pagination.index++;
      });

    thunks.forEach((x) => {
      builder.addCase(x.pending, (state, _action) => {
        state.loading = true;
        state.error = "";
      });
      builder.addCase(x.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.data = [];
      });
    });
  },
});

export default requestLogSlice.reducer; // default export
// export const { loadMore } = requestLogSlice.actions; // export sync reducers
