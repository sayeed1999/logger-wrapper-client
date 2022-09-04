import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import requestLogReducer from './features/requestLog/requestLogSlice';

const store = configureStore({
    reducer: {
        requestLogs: requestLogReducer,
    },
    // middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

export default store;