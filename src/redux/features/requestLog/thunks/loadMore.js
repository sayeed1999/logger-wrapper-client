import response from '../../../../assets/response.json';
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loadMore = createAsyncThunk(
    'requestLogs/loadMore', 
    async (payload, { getState }) => {
        
        const { pagination } = getState().requestLogs;
        console.log("call more 1", pagination);

        let data = response.data.slice();

        console.log("call more data", data);

        data = data.slice(((pagination.index) * pagination.size), ((pagination.index) * pagination.size) + pagination.size);
        console.log("call more datas ", data);
        return data;
        // return response.data; use this for axios response!
    }
);


export default loadMore;