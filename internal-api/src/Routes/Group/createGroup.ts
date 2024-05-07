import { prisma } from "../../Services/Prisma";
import { randomUUID } from 'crypto';

export default async function createGroup(data: any){
    let rtnData = {
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
                groupChat:{
                    create: {}
                },
                
            }
        })  

        console.log('new group', newGroup);

        if (rtnData.flag){
            const userGroupRelationArr = data.groupMembers.map((user: any) => {
                return {user:{connect:{userId: user.userId}}}
            })
            userGroupRelationArr.push(
                {user:{connect:{userId: userInfo?.userId}}}
            )

            await prisma.group.update({
                where:{
                    id: newGroup.id
                },
                data:{
                    users:{
                        create: userGroupRelationArr
                    }
                }
            });
        }

        if (data.currentEvent !== ''){
            
        }

    }catch(error){
        console.log(error);
    }


    return rtnData;
}
