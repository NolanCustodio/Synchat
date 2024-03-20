import { signUp } from "../../../API/User/userAuth"

interface verifyUserSignUp{
    username: {value: string, isUnique: boolean},
    email: {value: string, isUnique: boolean},
    password: {value: string}
}

export async function signUpRequest(userInput: verifyUserSignUp): Promise<any>{
    let rtnObj = {
        flag: false,
        username: false,
        email: false
    };

    try{
        const verifySignUp = {
            username: userInput.username.value,
            email: userInput.email.value,
            password: userInput.password.value,
            action:'signUp'
        }
        
        const response = await signUp(verifySignUp);

        rtnObj = {
            flag: response.action,
            username: response.uniqueFields.username,
            email: response.uniqueFields.email,
        }

    }catch (error){
        console.log(error);
    }

    return rtnObj;
}