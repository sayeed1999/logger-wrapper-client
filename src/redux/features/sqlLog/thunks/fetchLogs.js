import { dummy_logs } from "../initialState";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchLogs = createAsyncThunk(
    'sqlLogs/fetch', 
    async (payload, { getState }) => {
        const { pagination } = getState().sqlLogs;
        let data = dummy_logs.slice();
        data = data.slice(((pagination.index - 1) * pagination.size), ((pagination.index - 1) * pagination.size) + pagination.size);
        return data;
        // return response.data; use this for axios response!
    }
);

export default fetchLogs;