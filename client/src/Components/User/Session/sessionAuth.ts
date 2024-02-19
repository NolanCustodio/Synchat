import { user } from "../../../stores/userStore";


export function setSession(){
    if (user.session !== null){
        sessionStorage.setItem('session', user.session);
    }
}


export function getSession(){
    //probably need to do this on login
}

export function deleteSession(){
    //logout
}

