import { createStore } from "solid-js/store";

export const [isLoggedIn, setIsLoggedIn] = createStore({
    state: false
})
