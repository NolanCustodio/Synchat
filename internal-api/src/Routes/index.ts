import signUp from './User/SignUp';
import login from './User/Login';
import { checkSession } from './Auth/Session/sessionHelpers';

//Group
import createGroup from './Group/createGroup';

export default async function handleMessage(action: string, data: any){
    let rtnData;
    // const action = data.action;

    switch (action){
        case 'signUp':
            rtnData = await signUp(data);
            break;
        case 'login':
            rtnData = await login(data);
            break;
        case 'checkSession':
            rtnData = await checkSession(data);
            break;
        case 'createGroup':
            rtnData = await createGroup(data);
            break;
        default:
            rtnData = {
                eventUUID: data.eventUUID
            };
            break;
    }

    return rtnData;
}