import { newUser, setNewUser } from "../../../stores/userStore";

import { signUp } from "../../../API/User/userAuth"

export async function signUpRequest(){
    try{
        const makeNewUser = {
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
            action: 'signUp'
        }

        setNewUser(() => ({ password: undefined}));
        
        const response = await signUp(makeNewUser);
        // console.log(response);

        if (response.duplicateFields.length === 0){
            setNewUser(response);
            // console.log(response);
        }else{
            let output = ``;

            response.duplicateFields.forEach((duplicate: string) => {
                output += duplicate + " ";
            });

            output += "are already taken";
            console.log(output);
        }

    }catch (error){
        console.log(error);
    }
}