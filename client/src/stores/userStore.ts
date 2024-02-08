import { createStore } from "solid-js/store";

export const [newUser, setNewUser] = createStore({
    username: 'something',
    email: '',
    password: ''
})

export const [user, setUser] = createStore({
    username: 'again',
    password: ''
})