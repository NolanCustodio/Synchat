import { configureStore } from '@reduxjs/toolkit';

export const initState = configureStore({
    reducer: {event: 0,},
});