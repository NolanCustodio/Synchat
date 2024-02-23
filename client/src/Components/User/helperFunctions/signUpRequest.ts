import { signUp } from "../../../API/User/userAuth"

interface verifyUserSignUp{
    username: string,
    email: string,
    password: string
}

export async function signUpRequest(userInput: verifyUserSignUp): Promise<boolean>{
    let rtnBool = false;

    try{
        const verifyUserSignUp = {
            ...userInput,
            action :'signUp'
        }
        
        const response = await signUp(verifyUserSignUp);
        console.log(response.uniqueFields);

        setIsUserInputUnique(() => ({
            username: response.uniqueFields.username,
            email: response.uniqueFields.email
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