import "./SignUp.css"

// import { connectToRabbitMQ } from "../Database/User/SignUp";

import "../Database/User/SignUp";

export default function SignUp() {
    // const [state, setState] = createStore({
    //     username: null,
    //     email: null,
    //     password: null,
    // })

    let newUser = {
        newUsername: null,
        newEmail: null,
        newPassword: null,
    }

    async function signUp(target: any): Promise<void>{
        console.log(target[0].value);
        
        newUser.newUsername = target[0].value;
        newUser.newEmail = target[1].value;
        newUser.newPassword = target[2].value

        console.log(newUser);

        //call function that makes async ajax request

        //direct user to new page

    }
    
    return (
        <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign up
                    </h2>
                </div>
                <form class="mt-8 space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        signUp(e.target);

                        // alert(e);

                        //trying out rabbit
                        // connectToRabbitMQ();
                    }}
                >
                    {/* <input type="hidden" name="remember" value="true" /> */}
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="name" class="sr-only">Name</label>
                            <input id="name" name="name" type="text" class="tailwindInput" placeholder="Username" 
                                
                            />
                        </div>
                        <div>
                            <label for="email" class="sr-only">Email address</label>
                            <input id="email" name="email"   class="tailwindInput" placeholder="Email address" />
                        </div>
                        <div>
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