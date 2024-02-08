import { newUser, setNewUser } from "../../stores/userStore";

import { signUpRequest } from "./helperFunctions/signUpRequest";


import "./userAuth.css";


export default function SignUp() {

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setNewUser(() => ({
            username: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
        }))
        await signUpRequest();
        console.log("newst user",newUser);
    }
    

    return (
        <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign up
                    </h2>

                    <h3>
                        {newUser.username}
                    </h3>
                </div>

                <form 
                    class="mt-8 space-y-6"
                    
                    onSubmit={handleSubmit}

                >
                    {/* <input type="hidden" name="remember" value="true" /> */}
                    <div class="rounded-md shadow-sm -space-y-px">          
                        <div class="form-input">
                            <label for="username" class="sr-only">Name</label>
                            <input 
                                id="username" 
                                name="username" 
                                type="text" 
                                class="tailwindInput" 
                                placeholder="Username" 
                                
                            />
                        </div>

                        <div class="form-input">
                            <label for="email" class="sr-only">Email address</label>
                            <input id="email" name="email"   class="tailwindInput" placeholder="Email address" />
                        </div>
                        <div class="form-input">
                            <label for="password" class="sr-only">Password</label>
                            <input id="password" name="password" type="password" class="tailwindInput" placeholder="Password" />
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