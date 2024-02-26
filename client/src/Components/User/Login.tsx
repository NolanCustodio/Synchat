import { createSignal, Show } from 'solid-js';
import { useNavigate } from '@solidjs/router';

import { loginRequest } from "./helperFunctions/loginRequest";

import "./userAuth.css"

export default function Login(){
    const [requestOutput, setRequestOutput] = createSignal('');

    const [isInputUsed, setIsInputUsed] = createSignal({
        flag: true,
        username: true,
        password: true,
    })

    const [userInput, setUserInput] = createSignal({
        flag: true,
        username: '',
        password: ''
    })

    const navigate = useNavigate();
    
    const changeInputStateToTrue = (inputField: string): void => {
        setIsInputUsed((state) => ({
            ...state,
            [inputField] : true
        }))
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        setUserInput((state) => ({
            ...state,
            username: event.target[0].value,
            password: event.target[1].value,
        }))

        Object.entries(userInput()).forEach(([key, value]) => {
            if (value === '') {
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

        const response = await loginRequest({username: userInput().username, password: userInput().password});

        if (response.flag){
            setRequestOutput(() => ('Success - Redirecting'));
            setTimeout(() => {navigate('/Home')}, 2000);
        }

        setUserInput((state) => ({
            ...state,
            flag: response.flag
        }))
    }

    return(
        <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        {`Login ${requestOutput()}`}
                    </h2>
                </div>

                <form 
                    class="mt-8 space-y-6"
                    
                    onSubmit={handleSubmit}

                >
                    <div class="rounded-md shadow-sm -space-y-px">          
                        <div class="form-input">
                            <label for="username" class="sr-only">Name</label>
                            <input 
                                id="username" 
                                name="username" 
                                type="text" 
                                class={isInputUsed().username ? "tailwindInput" : "input-error"}
                                placeholder="Username" 
                                onClick={()=>changeInputStateToTrue('username')}
                            />
                        </div>

                        <div class="form-input">
                            <label for="password" class="sr-only">Password</label>
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                class={isInputUsed().password ? "tailwindInput" : "input-error"} 
                                placeholder="Password"
                                onClick={()=>changeInputStateToTrue('password')}
                            />
                        </div>
                    </div>

                    <Show when={userInput().flag === false}>
                        <div class='input-error'>
                            Wrong Username or Password
                        </div>
                    </Show>

                    <div>
                        <button type="submit" class="tailwindSubmit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

