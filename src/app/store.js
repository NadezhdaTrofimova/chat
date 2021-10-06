import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import userSlice from "../slices/userSlice";

export default configureStore({
    reducer: {
        user: userSlice
    },
})