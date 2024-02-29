import { createSignal } from "solid-js";

import { logOutRequest } from "./helperFunctions/logOutRequest";

export default function logOut(){
    const [logOut, setLogOut] = createSignal();

    const handleLogout = async (event: any) => {
        event.preventDefault();

        const response = await logOutRequest()

        setTimeout(() => {window.location.href="/"}, 2000);
    }

    return(
        <button class="nav-button" onClick={handleLogout}>
            Logout
        </button>
    )
}