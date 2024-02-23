import { useNavigate } from '@solidjs/router';



import { loginRequest } from "./helperFunctions/loginRequest";

import "./userAuth.css"

export default function Login(){
    const navigate = useNavigate();
    
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        
        const verifyUserInput = {
            username: event.target[0].value,
            password: event.target[1].value
        } 

        await loginRequest(verifyUserInput);
    }

    return(
        <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Login
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
                                class="tailwindInput" 
                                placeholder="Username" 
                                
                            />
                        </div>

                        <div class="form-input">
                            <label for="password" class="sr-only">Password</label>
                            <input id="password" name="password" type="password" class="tailwindInput" placeholder="Password" />
                        </div>
                    </div>

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

