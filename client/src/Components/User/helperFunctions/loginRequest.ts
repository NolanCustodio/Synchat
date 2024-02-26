import { login } from "../../../API/User/userAuth";

interface verifyUserInput{
    username: string,
    password: string
}

export async function loginRequest(verifyUserInput: verifyUserInput){
    let rtnObj = {
        flag: false
    };

    try{
        const verifyUser ={
            ...verifyUserInput,
            action: 'login'
        }
        const response = await login(verifyUser);

        rtnObj.flag = response.action

    }catch(error){
        console.log(error);
    }

    return rtnObj;
}



