import { createSignal, Show } from "solid-js";

import { signUpRequest } from "./helperFunctions/signUpRequest";

import "./userAuth.css";


export default function SignUp() {
    const [requestOutput, setRequestOutput] = createSignal('');

    const [isInputUsed, setIsInputUsed] = createSignal({
        flag: true,
        username: true,
        email: true,
        password: true,
    })

    const [userInput, setUserInput] = createSignal({
        username: {value: '', isUnique: true},
        email: {value: '', isUnique: true},
        password: {value: ''}
    })

    const changeInputStateToTrue = (inputField: string): void =>{
        setIsInputUsed((state) => ({
            ...state,
            [inputField]: true
        }))
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        setUserInput((state) => ({
            username: {value: event.target[0].value, isUnique: state.username.isUnique},
            email: {value: event.target[1].value, isUnique: state.email.isUnique},
            password: {value: event.target[2].value}
            
        }))

        Object.entries(userInput()).forEach(([key, value]) => {
            if(value.value === ''){
                setIsInputUsed((state) => ({
                    ...state,
                    [key]: false,
                    flag: false
                }))
            }
        })

        if (isInputUsed().flag === false){
            changeInputStateToTrue('flag');
            return;
        }
        const response = await signUpRequest(userInput());

        setUserInput((state) => ({
            ...state,
            username: {value: state.username.value, isUnique: response.username},
            email: {value: state.email.value, isUnique: response.email}
        }))

        if (response.flag){
            setRequestOutput(() => ('Success - Redirecting'));
            setTimeout(() => {window.location.href='/Home'}, 2000);
        }
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
                                class={isInputUsed().username ? "tailwindInput" : "input-error"}
                                placeholder="Username" 
                                onClick={()=>{changeInputStateToTrue('username')}}
                            />
                            <Show when={userInput().username.isUnique === false}>
                                <p class='taken-field'>Username Taken</p>
                            </Show>
                        </div>

                        <div class="form-input">
                            <label for="email" class="sr-only">Email address</label>
                            <input id="email" name="email"   class={isInputUsed().email ? "tailwindInput" : "input-error"} placeholder="Email address" onClick={()=>{changeInputStateToTrue('email')}}/>
                            <Show when={userInput().email.isUnique === false}>
                                <p class='taken-field'>Email Taken</p>
                            </Show>
                        </div>
                        <div class="form-input">
                            <label for="password" class="sr-only">Password</label>
                            <input id="password" name="password" type="password" class={isInputUsed().password ? "tailwindInput" : "input-error"} placeholder="Password" onClick={()=>{changeInputStateToTrue('password')}}/>
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