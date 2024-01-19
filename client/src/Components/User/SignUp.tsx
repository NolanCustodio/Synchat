import { createStore } from "solid-js/store";

import "./SignUp.css"

import { testRabbit } from "../Database/User/SignUp";


export default function SignUp() {
    const [newUserInfo, setNewUserInfo] = createStore({
        username: 'something',
        email: '',
        password: '',
    })

    async function callTestRabbit(target: any): Promise<void>{
        try{
            // console.log(target[0].value);

            const test: Promise<any> = await testRabbit({
                username: target[0].value,
                email: target[1].value,
                password: target[2].value,
            })
            const result = await test;
            console.log('rabbit test success',result);

            //Solidjs store value update
            setNewUserInfo({ username: result.username });

            //direct user to new page
            return

        } catch (error){
            console.log(error);
        }
    }


    return (
        <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign up
                    </h2>

                    <h3>
                        {newUserInfo.username}
                    </h3>
                </div>

                <form class="mt-8 space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault();

                        callTestRabbit(e.target);

                        // console.log("button press");
                    }}
                >
                    {/* <input type="hidden" name="remember" value="true" /> */}
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div class="form-input">
                            <label for="username" class="sr-only">Name</label>
                            <input id="username" name="username" type="text" class="tailwindInput" placeholder="Username" 
                                
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