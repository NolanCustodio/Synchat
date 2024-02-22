import { isLoggedIn } from "../../stores/userStore";


const Event = () =>{
    console.log(isLoggedIn.state);

    return(
        <div>
            Group Component
        </div>
    )
}

export default Event;