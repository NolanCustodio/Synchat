import { prisma } from "../../Services/Prisma";

export default async function createGroup(data: any){
    let rtnData = {
        test: 'work',
        eventUUID: data.eventUUID,
        flag: false
    }
    
    console.log(data);

    const datetimeISO = new Date(`${data.startDate} ${data.startTime.hour}:${data.startTime.minute}`).toISOString();

    try{
        const userInfo = await prisma.session.findUnique({
            where:{
                sessionId: data.userSessionId 
            }
        })

        if (userInfo !== null){
            rtnData.flag = true
        }

        const newGroup = await prisma.group.create({
            data:{
                groupName: data.groupName,
                events: {
                    create:[{
                        eventName: data.currentEvent,
                        startDate: datetimeISO,
                    }]
                }
            }
        })  

        // console.log('new group', newGroup);

        if (rtnData.flag){
            const newRelation = await prisma.group.update({
                where:{
                    id: newGroup.id
                },
                data:{
                    users:{
                        create:[
                            {user:{
                                connect:{
                                    userId: userInfo!.userId
                                }
                            }}
                        ]
                    }
                }
            })

            console.log('new relation', newRelation);
        }

    }catch(error){
        console.log(error);
    }


    return rtnData;
}
