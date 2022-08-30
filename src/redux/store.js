import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import sqlLogReducer from './features/sqlLog/sqlLogSlice';

const store = configureStore({
    reducer: {
        sqlLogs: sqlLogReducer,
    },
    middleware: (getDefaultMiddlewares) => 
        getDefaultMiddlewares().concat(logger),
});

export default store;