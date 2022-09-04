import response from '../../../../assets/response.json';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loadMore = createAsyncThunk(
    'requestLogs/loadMore', 
    async (payload, { getState }) => {
        const { pagination } = getState().requestLogs;
        let data = response.data.slice();
        data = data.slice(((pagination.index) * pagination.size), ((pagination.index) * pagination.size) + pagination.size);
        return data;
        // return response.data; use this for axios response!
    }
);

export default loadMore;