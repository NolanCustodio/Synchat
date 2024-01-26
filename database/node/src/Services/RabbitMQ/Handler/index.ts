
import signUp from './User/SignUp';

export default async function handleMessage(data: any){
    let rtnData;
    const action = 'signUp';
    // const action = data.action;

    switch (action){
        case 'signUp':
            rtnData = await signUp(data);
            break;
    }

    return rtnData;
}