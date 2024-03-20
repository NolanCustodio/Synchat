import { logOutRequest } from "./userRequests/logOutRequest";

export default function LogOut(){

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