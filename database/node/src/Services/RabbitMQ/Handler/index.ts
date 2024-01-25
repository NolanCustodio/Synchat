
//will be called from consumer

//function (data: any) = {}
    // const action = data.action?
    // switch case?
        // if (action === 'SignUp'){}
        // sign user in


//test
import signUp from './User/SignUp';

export default function handleMessage(data: any){
    return signUp(data);
}