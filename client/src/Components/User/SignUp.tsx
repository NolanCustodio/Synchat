import { createStore } from "solid-js/store";

import "./SignUp.css"

import { signUp } from "../../API/User/SignUp";


export default function SignUp() {
    const [newUserInfo, setNewUserInfo] = createStore({
        username: 'something',
        email: '',
        password: '',
    })

    async function callTestRabbit(target: any): Promise<void>{
        try{
            // console.log(target[0].value);

            // const newUser = {
            //     username: target[0].value,
            //     email: target[1].value,
            //     password: target[2].value,
            //     action: 'signUp'
            // }
            const newUser = {
                username: 'a',
                email: 'a',
                password: 'a',
                action: 'signUp'
            }

            const test = await signUp(newUser)
            // const result = await test;
            console.log('rabbit test success', test);

            if (test.duplicateFields.lenth === 0){
                setNewUserInfo({ username: test.username });
                console.log('working weird');
            }else{
                let output = ``;
                
                for (let i = 0; i < test.duplicateFields.length; i++){
                    output.concat(test.duplicateFields[i], " ");
                    console.log('single field',test.duplicateFields[i]);
                }
                output.concat("are already taken");
                console.log('output =',output);
                // window.alert(output)
            }

            //Solidjs store value update
            // setNewUserInfo({ username: test.username });

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