import { prisma } from "../../Services/Prisma"

export default async function getGroup(data: any){
    let rtnData: any = {
        eventUUID: data.eventUUID,
        completeGroup:{}
    }

    try{
        const group = await completeUUID(data.groupId);
        rtnData.completeGroup = group
        // if(data.isUuidComplete){
        //     group = await completeUUID(data.groupId)
        //     rtnData.completeGroup = group
        // }else{
        //     group = await partialUUID(data.groupId);
        // }

    }catch(error){
        console.log(error);
    }

    return rtnData;
}

async function completeUUID(uuid: string){

    try{
        const findGroup = await prisma.group.findUnique({
            where:{
                groupId: uuid
            },
            select:{
                groupName: true,
                groupId: true,
                users:{
                    select:{
                        user:{
                            select:{
                                username: true,
                                userId: true,
                            }
                        }
                    }
                },
                events:{
                    select:{
                        eventId: true,
                        eventName: true,
                        startDate: true,
                        isCurrent: true
                    }
                },
                groupChat:{
                    select:{
                        groupChatId: true,
                    }
                },
                currentEvent:{
                    select: {
                        eventId: true,
                    }
                }
            }
        });

        // console.log(findGroup);
        return findGroup;
    }catch(error){
        console.log(error);
    }
}

async function partialUUID(partialUUID: string){
    console.log(partialUUID);

    return {}
}