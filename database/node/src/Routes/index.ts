
import signUp from './User/SignUp';

export default async function handleMessage(action: string, data: any){
    let rtnData;
    console.log(action);
    // const action = data.action;

    switch (action){
        case 'signUp':
            rtnData = await signUp(data);
            break;
    }

    return rtnData;
}