import { createStore } from "solid-js/store";

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

export const [user, setUser] = createStore({
    username: 'again',
    password: ''
})