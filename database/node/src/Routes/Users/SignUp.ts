//import mysql stuff

import RecieveSignUp from "../../Middleware/RabbitMQ/Users/RecieveSignUp";

//function to call in index
async function SignUp(): Promise<any | void>{
    //change this to have a proper listener here or in index.ts

    console.log("start signup.ts")
    //use rabbitmq to get information
    const test = await RecieveSignUp()

    //use information to make a db query

    console.log(test);
}

export default SignUp;