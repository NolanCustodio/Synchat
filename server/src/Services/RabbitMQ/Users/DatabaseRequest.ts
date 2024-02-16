import RabbitClient from '../RabbitClient';

export default async function DatabaseRequest(userInfoWithAction: any): Promise<any>{
    let rtnData: any;
    try{

        rtnData = await RabbitClient.produce(userInfoWithAction);

    } catch (error) {
        rtnData = {error:error}
    }
    return rtnData;
}

