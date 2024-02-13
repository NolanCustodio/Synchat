import { createStore } from "solid-js/store";

export const [newUser, setNewUser] = createStore({
    username: 'something',
    email: '',
    password: '',
    action: false,
    takenFields: {
        username: true,
        email: true
    },
})

export const [user, setUser] = createStore({
    username: 'again',
    password: ''
})