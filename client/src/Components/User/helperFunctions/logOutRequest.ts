import { logOut } from "../../../API/User/userAuth";

export async function logOutRequest(){
    const response =  await logOut()
    console.log(response);
}

