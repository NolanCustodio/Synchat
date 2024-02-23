import { userInput } from "../../../stores/userStore";


export function emptyFields(){
    
    Object.keys(userInput).forEach(key => {
        if (userInput[key] === null){
             
        }
    })
}




