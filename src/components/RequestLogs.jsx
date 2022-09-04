import React, { useEffect, useRef } from "react";
import RequestLog from "./RequestLog";
import { useSelector, useDispatch } from 'react-redux';
import fetchLogs from "../redux/features/RequestLog/thunks/fetchLogs";
import loadMore from '../redux/features/RequestLog/thunks/loadMore';

const RequestLogs = () => {
    // console.log('re-rendered')
    const dispatch = useDispatch();
    const logs = useSelector(state => state.requestLogs.data);

    const listInnerRef = useRef();

    const onScroll = () => {
        // console.log('scroll on div happened')
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            if (scrollTop + clientHeight === scrollHeight) {
                dispatch(loadMore());
                // console.log('Reached bottom!');
            }
        }
    };

    useEffect(() => {
        dispatch(fetchLogs());
    }, []);

    return <div style={{ height: '90vh', overflowY: 'auto', border: 'solid 2px brown', padding: '4px' }} onScroll={onScroll} ref={listInnerRef}>
        {logs.map((log, index) => <RequestLog key={index} log={log} />)}
    </div>;
};

export default React.memo(RequestLogs);