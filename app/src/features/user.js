import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {token: null, name: null};

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialUserState},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;