import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";

import { signUpRequest } from "./helperFunctions/signUpRequest";
import { userInput, setUserInput } from "../../stores/userStore";
import { emptyFields } from "./helperFunctions/formChecks";

import "./userAuth.css";


export default function SignUp() {
    const [requestOutput, setRequestOutput] = createSignal('');
    const [inputClass, setInputClass] = createSignal(`tailwindInput`);

    const [isInputUsed, setIsInputUsed] = createSignal({
        flag: true,
        username: true,
        email: true,
        password: true,
    })


    const navigate = useNavigate();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        setUserInput((state) => ({
            username: {value: event.target[0].value, isUnique: state.username.isUnique},
            email: {value: event.target[1].value, isUnique: state.username.isUnique},
            password: {value: event.target[2].value}
            
        }))

        Object.entries(userInput).forEach(([key, value]) => {
            if(value.value === ''){
                setIsInputUsed((state) => ({
                    ...state,
                    [key]: false,
                    flag: false
                }))
            }
        })

        console.log(isInputUsed());

        // const response = await signUpRequest(verifyUserSignUp);

        if (isInputUsed().flag){
            console.log('weeo')
        }

        //maybe change this to look for session
        // if(newUser.action){
        //     setRequestOutput(() => ('Success - Redirecting'))
        //     setTimeout(() => {navigate('/Login')}, 2000);
        // }else{
        //     setRequestOutput(() => ('Problem'))

        //     //call function with each problem area
        //     badInput();
        // }

        setIsInputUsed((state) => ({
            ...state,
            flag: true
        }))
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
                            <input id="email" name="email"   class={isInputUsed().email ? "tailwindInput" : "input-error"} placeholder="Email address" />
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