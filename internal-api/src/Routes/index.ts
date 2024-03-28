//User
import signUp from './User/SignUp';
import login from './User/Login';

//UserInteractions
import usernameSearch from './userInteractions/usernameSearch';

//Session
import { checkSession } from './Auth/Session/sessionHelpers';

//Group
import createGroup from './Group/createGroup';
import { getGroups } from './Group/getGroups';

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
        case 'usernameSearch':
            rtnData = await usernameSearch(data);
            break;
        case 'getGroups':
            rtnData = await getGroups(data);
            break;
        default:
            rtnData = {
                eventUUID: data.eventUUID
            };
            break;
    }

    return rtnData;
}