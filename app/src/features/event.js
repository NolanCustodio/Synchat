import { createSlice } from "@reduxjs/toolkit";

const eventList = [];

export const eventSlice = createSlice({
    name: "eventList",
    initialState: { value: eventList },
    reducers: {
        populateEventList: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { populateEventList } = eventSlice.actions;

export default eventSlice.reducer;