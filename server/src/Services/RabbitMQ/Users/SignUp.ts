import EventEmitter from 'events';
import { randomUUID } from 'crypto';

import RabbitClient from '../RabbitClient';
import hashPassword from '../../Encrypt/Users/passwordEncrypt';

export default async function signUp(newUser: any): Promise<any>{
    let rtnData: any;
    try{
        const uuid = randomUUID();

        //setup/use interface/object hash password
        const hashedPassword = await hashPassword(newUser.password);
        newUser.password = hashedPassword;
        newUser.eventUUID = uuid;

        // if (newUser.password === ''){
        //     //create proper redirection
        //     res.redirect('/404');
        // }

        //     //valid user info, but still not verified for unique values
        //     RabbitClient.produce(newUser)
        // });

        
        rtnData = await RabbitClient.produce(newUser);

    } catch (error) {
        rtnData = {error:error}
    }
    return rtnData;
}

