import { setIsLoggedIn } from "../../../stores/userStore";
import { cookieCheck } from "../../../API/User/userAuth";

export async function cookieRequest(){
    const rtn = await cookieCheck();
    
    if(rtn.isCookieUsed){
        setIsLoggedIn({state: rtn.isCookieUsed})
    }
}

export function deleteSession(){
    //logout
}

