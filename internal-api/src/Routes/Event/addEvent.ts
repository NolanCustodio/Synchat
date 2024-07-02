import { prisma } from '../../Services/Prisma/index'


export default async function addEventListener(data:any){
    let rtnData={
        eventUUID: data.eventUUID
    }

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
                minute: data.starTime.minute
            }
        }

        if (currentGroup !== null){
            //createEvent
        }


        console.log(currentGroup);
        
    }catch(error){

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