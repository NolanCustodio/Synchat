import EventEmitter from 'events';
import { randomUUID } from 'crypto';

import RabbitClient from '../RabbitClient';
import hashPassword from '../../Encrypt/Users/passwordEncrypt';

export default async function signUp(newUser: any): Promise<any>{
    let rtnData: any;
    try{
        const uuid = randomUUID();

        newUser.eventUUID = uuid;

        rtnData = await RabbitClient.produce(newUser);

    } catch (error) {
        rtnData = {error:error}
    }
    return rtnData;
}

