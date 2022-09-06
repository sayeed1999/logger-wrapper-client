import React, { useEffect, useRef } from "react";
import RequestLog from "./RequestLog";
import { useSelector, useDispatch } from 'react-redux';
import fetchLogs from "../redux/features/RequestLog/thunks/fetchLogs";
import loadMore from '../redux/features/RequestLog/thunks/loadMore';

const RequestLogs = () => {
    // console.log('re-rendered')
    const dispatch = useDispatch();
    const logs = useSelector(state => state.requestLogs.data);
    console.log(logs, 111, import.meta.env)

    const listInnerRef = useRef();

    const onScroll = () => {
        console.log('scroll on div happened')
        if (listInnerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
            console.log('scroll on div happened 1', scrollTop + clientHeight, scrollHeight);
            if (scrollTop + clientHeight + 1 >= scrollHeight) {
                dispatch(loadMore());
                console.log('Reached bottom!');
            }
        }
    };

    useEffect(() => {
        dispatch(fetchLogs());
    }, []);

    return <div style={{ height: '100vh', overflowY: 'auto' }} className="request-log log-rows" onScroll={onScroll} ref={listInnerRef}>
        {logs.map((logData, index) => <RequestLog key={index} log={logData} />)}
    </div>;
};

export default React.memo(RequestLogs);