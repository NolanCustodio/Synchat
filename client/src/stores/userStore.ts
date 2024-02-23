import { createStore } from "solid-js/store";

interface userAuthInput{
    username: {value: string, isUnique: boolean},
    email: {value: string, isUnique: boolean},
    password: {value: string},
}

export const [userInput, setUserInput] = createStore<userAuthInput>({
    username: {value: '', isUnique:false},
    email: {value: '', isUnique:false},
    password: {value: ''}
})

export const [isLoggedIn, setIsLoggedIn] = createStore({
    state: false
})
