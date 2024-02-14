import { user, setUser } from "../../../stores/userStore";

import { login } from "../../../API/User/userAuth";

export async function loginRequest(){
    try{
        const verifyUser ={
            username: user.username,
            password: user.password,
            action: 'login'
        }

        setUser(() => ({
            username: undefined,
            password: undefined,
            email: undefined
        }));

        const response = await login(verifyUser);

        console.log(response);
    }catch(error){
        console.log(error);
    }
}



