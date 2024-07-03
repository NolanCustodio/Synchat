import { prisma } from '../../Services/Prisma/index'

import { createEvent } from './createEvent';

export default async function addEventListener(data:any){
    let rtnData={
        eventUUID: data.eventUUID
    };
    let flag: boolean = false;

    console.log(data);

    try{


        const currentGroup = await prisma.group.findUnique({
            where:{groupId: data.currentGroupId},
        })


        const formatEvent = {
            currentEvent: data.eventname,
            startDate: data.startDate,
            startTime:{
                hour: data.startTime.hour,
                minute: data.startTime.minute
            }
        }

        console.log(currentGroup);

        // if (currentGroup !== null){
        //     createEvent(formatEvent, currentGroup.groupId, prisma)
        // }

        
    }catch(error){
        console.log(error);
    }

    return rtnData;
}

// {
//     eventName: 'testst',
//     startDate: '0001-01-01',
//     startTime: { hour: '6', minute: 0 },
//     currentGroupId: 'ad972335-d634-433a-b254-fa3c508360b8',
//     action: 'addEvent',
//     userSession: '51284e3d-f520-4dbd-bf5b-90349f46ec38',
//     eventUUID: 'c648cf00-bfa1-42da-be46-61bee6baec4f'
// }