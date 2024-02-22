import { Show } from "solid-js";
import { A } from "@solidjs/router"

import { isLoggedIn } from "../../stores/userStore";

const NavButton = (props: any) => {
    const text = props.nav_text;

    return(
        <A href={props.nav_link}>
            <button class="px-4 py-2 font-medium rounded text-white bg-blue-500 hover:bg-blue-700">
                {text}
            </button>
        </A>
    )
}

export default () => {
    return(
        <div class="flex items-center justify-left space-x-4 px-4 py-2 bg-gray-800 text-white">
            <NavButton nav_link="LandingPage" nav_text="Landing"/>
            
            <Show when={isLoggedIn.state}>
                <NavButton nav_link="HomePage" nav_text="Home"/>
                <NavButton nav_link="Groups" nav_text="Groups"/>
            </Show>

            <NavButton nav_link="SignUp" nav_text="Sign Up"/>
            <NavButton nav_link="Login" nav_text="Login"/>
        
        </div>
    )
}

