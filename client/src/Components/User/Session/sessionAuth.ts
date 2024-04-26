import { setIsLoggedIn } from "../../../stores/userStore";
import { checkSession } from "../../../API/User/userAuth";

export async function cookieRequest(){
    try{
        const rtn = await checkSession();
        
        if(rtn.isSessionValid){
            setIsLoggedIn({state: rtn.isSessionValid})
            return rtn;
        }
    }catch(error){
        console.log(error);
    }
}

