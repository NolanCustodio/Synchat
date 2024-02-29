import { logOut } from "../../../API/User/userAuth";

export async function logOutRequest(): Promise<any>{
    const response = await logOut()

    return response;
}

