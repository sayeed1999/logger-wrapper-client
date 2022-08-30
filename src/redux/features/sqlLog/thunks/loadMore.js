import { dummy_logs } from "../initialState";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loadMore = createAsyncThunk(
    'sqlLogs/loadMore', 
    async (payload, { getState }) => {
        const { pagination } = getState().sqlLogs;
        let data = dummy_logs.slice();
        data = data.slice(((pagination.index) * pagination.size), ((pagination.index) * pagination.size) + pagination.size);
        return data;
        // return response.data; use this for axios response!
    }
);

export default loadMore;