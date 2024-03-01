import { setIsLoggedIn } from "../../../stores/userStore";
import { checkSession } from "../../../API/User/userAuth";

export async function cookieRequest(){
    const rtn = await checkSession();
    
    if(rtn.isSessionValid){
        setIsLoggedIn({state: rtn.isSessionValid})
        return;
    }
}

