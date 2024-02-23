import { login } from "../../../API/User/userAuth";

interface verifyUserInput{
    username: string,
    password: string
}

export async function loginRequest(verifyUserInput: verifyUserInput){
    try{
        const verifyUser ={
            ...verifyUserInput,
            action: 'login'
        }
        const response = await login(verifyUser);
        //response: bool

        //if response redirect accordingly

        

        // console.log(response);
    }catch(error){
        console.log(error);
    }
}



