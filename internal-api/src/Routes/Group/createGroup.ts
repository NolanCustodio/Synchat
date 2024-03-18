import { prisma } from "../../Services/Prisma";

export default async function createGroup(data: any){
    let rtnData = {
        test: 'work',
        eventUUID: data.eventUUID
    }
    
    console.log(data);

    return rtnData;
}
