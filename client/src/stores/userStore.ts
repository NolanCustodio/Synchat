import { createStore } from "solid-js/store";

//get rid of this
export const [newUser, setNewUser] = createStore({
    username: '',
    email: '',
    password: '',
    action: false,
    uniqueFields: {
        username: false,
        email: false
    },
})

//get rid of this
export const [user, setUser] = createStore({
    username: 'again',
    password: '',
    session: ''
})

export const [isLoggedIn, setIsLoggedIn] = createStore({
    state: false
})
