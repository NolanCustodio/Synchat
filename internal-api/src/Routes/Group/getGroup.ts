import { prisma } from "../../Services/Prisma"

export default async function getGroup(data: any){
    let rtnData: any = {
        event:data.eventUUID,
        completeGroup:{}
    }

    try{
        if(data.isUuidComplete){
            const group = await completeUUID(data.groupId)
            rtnData.completeGroup = group
        }

    }catch(error){
        console.log(error);
    }

    return rtnData;
}

async function completeUUID(uuid: string){

    try{
        const findGroup = await prisma.group.findFirst({
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

async function partialUUID(){

}