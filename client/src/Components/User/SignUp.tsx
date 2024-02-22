import { newUser, setNewUser, user } from "../../stores/userStore";
import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";

import { signUpRequest } from "./helperFunctions/signUpRequest";

import "./userAuth.css";


export default function SignUp() {
    const [requestOutput, setRequestOutput] = createSignal('');
    const [inputClass, setInputClass] = createSignal(`tailwindInput`);

    const navigate = useNavigate();
    const handleSubmit = async (event: any) => {
        event.preventDefault();

        //call function to check if fields are blank

        setNewUser(() => ({
            username: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
        }))
        await signUpRequest();
        console.log("newst user",newUser);

        //maybe change this to look for session
        if(newUser.action){
            setRequestOutput(() => ('Success - Redirecting'))
            setTimeout(() => {navigate('/Login')}, 2000);
        }else{
            setRequestOutput(() => ('Problem'))

            //call function with each problem area
            badInput();
        }

    }

    function badInput(){
        setInputClass(() => (`input-error`))
    }
    

    return (
        <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        {`Sign Up ${requestOutput()}`}
                    </h2>
                </div>

                <form 
                    class="mt-8 space-y-6"
                    onSubmit={handleSubmit}
                >
                    <div class="rounded-md shadow-sm -space-y-px">          
                        <div class='form-input'>
                            <label for="username" class="sr-only">Name</label>
                            <input 
                                id="username" 
                                name="username" 
                                type="text" 
                                class={inputClass()}
                                placeholder="Username" 
                                
                            />
                        </div>

                        <div class="form-input">
                            <label for="email" class="sr-only">Email address</label>
                            <input id="email" name="email"   class={inputClass()} placeholder="Email address" />
                        </div>
                        <div class="form-input">
                            <label for="password" class="sr-only">Password</label>
                            <input id="password" name="password" type="password" class={inputClass()} placeholder="Password" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="tailwindSubmit">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}