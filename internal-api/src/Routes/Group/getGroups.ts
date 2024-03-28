import { prisma } from "../../Services/Prisma"

export async function getGroups(data: any){
    let rtnData = {
        eventUUID: data.eventUUID
    }

    try{
        // console.log('etsstsd');
    }catch(error){
        console.log(error);
    }

    return rtnData;
}