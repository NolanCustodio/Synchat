import { user } from "../../../stores/userStore";
import { cookieCheck } from "../../../API/User/userAuth";

export function setSession(){
    console.log('in setSession');
    if (user.session !== null){
        // sessionStorage.setItem('session', user.session);
        
    }
}


export async function cookieRequest(){
    const isCookieSaved = await cookieCheck();
}

export function deleteSession(){
    //logout
}

