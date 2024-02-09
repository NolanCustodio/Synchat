import { randomUUID } from 'crypto';

import RabbitClient from '../RabbitClient';

export default async function DatabaseRequest(userInfoWithAction: any): Promise<any>{
    let rtnData: any;
    try{
        const uuid = randomUUID();

        userInfoWithAction.eventUUID = uuid;

        rtnData = await RabbitClient.produce(userInfoWithAction);

    } catch (error) {
        rtnData = {error:error}
    }
    return rtnData;
}

