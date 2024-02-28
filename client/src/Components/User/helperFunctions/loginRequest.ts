import { login } from "../../../API/User/userAuth";

interface verifyUserInput{
    username: string,
    password: string
}

interface rtnFlag{
    flag: boolean
}

export async function loginRequest(verifyUserInput: verifyUserInput): Promise<rtnFlag>{
    let rtnObj = {
        flag: false
    };

    try{
        const verifyUser ={
            ...verifyUserInput,
            action: 'login'
        }
        const response = await login(verifyUser);

        rtnObj.flag = response.flag

    }catch(error){
        console.log(error);
    }

    return rtnObj;
}



