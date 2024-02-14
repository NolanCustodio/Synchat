import { newUser, setNewUser } from "../../../stores/userStore";

export function emptyInputs(){
    if(
        newUser.username === null ||
        newUser.email === null ||
        newUser.password === null
    ){
        setNewUser(() => ({
            username: '',
            email: '',
            password: ''
        }))
    }
}

//check password function




