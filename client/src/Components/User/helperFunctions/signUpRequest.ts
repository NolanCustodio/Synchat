import { newUser, setNewUser, setUser } from "../../../stores/userStore";

import { signUp } from "../../../API/User/userAuth"

export async function signUpRequest(): Promise<boolean>{
    let rtnBool = false;

    try{
        const makeNewUser = {
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
            action: 'signUp'
        }

        setNewUser(() => ({
            username: undefined,
            email: undefined, 
            password: undefined,
        }));
        
        const response = await signUp(makeNewUser);
        // console.log(response);

        setNewUser(() => ({
            uniqueFields:{
                username: response.uniqueFields.username,
                email: response.uniqueFields.email
            },
            action: response.action
        }))
    
        // if (response.action){
        //     setUser(() => ({
        //         session: response.session
        //     }))
        //     setSession();
        // }

        // if (Object.keys(response.takenFields).length === 0){
        //     setNewUser(response);
        //     // console.log(response);
        // }else{
        //     setNewUser(() => ({
        //         takenFields:{
        //             username: response.takenFields.username,
        //             email: response.takenFields.email
        //         },
        //         action: response.action
        //     }))

        //     // setNewUser(() => ({duplicateFields: response.duplicateFields}))

        //     //prod does not need below logic
        //     let output = ``;

        //     response.takenFields.forEach((duplicate: string) => {
        //         // setNewUser(() => ({duplicateFields: response.takenFields}))
        //         output += duplicate + " ";
        //     });

        //     output += "are already taken";
        //     console.log(output);
        // }

    }catch (error){
        console.log(error);
    }

    return rtnBool;
}