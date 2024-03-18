import { prisma } from "../../Services/Prisma";

export default async function createGroup(data: any){
    let rtnData = {
        test: 'work',
        eventUUID: data.eventUUID
    }
    
    console.log(data);

    const datetimeISO = `${data.startDate} ${data.startTime.hour}:${data.startTime.minute}:00.000`;

    try{
        const newGroup = await prisma.group.create({
            data:{
                groupName: data.groupName,
                events: {
                    create:[
                        {
                            eventName: data.eventName,
                            startDate: datetimeISO
                        }
                    ]
                }
            }
        })

        console.log('new group', newGroup);
        
        // const update = await prisma.group.update({
        //     where: { id: newGroup.id },
        //     data:{
        //         users:{
        //             connect:[
        //                 {userId: data.userId}
        //             ]
        //         }
        //     }
        // })

        // console.log('update', update);

    }catch(error){

    }


    return rtnData;
}
