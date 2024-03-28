import { prisma } from "../../Services/Prisma"

export async function getGroups(data: any){
    let rtnData = {
        eventUUID: data.eventUUID,
        userGroups: []
    }

    try{
        // console.log('etsstsd');

        const userGroupsRelation = await prisma.user.findMany({
            where:{
                session:{
                    sessionId: data.userSessionId
                }
            },
            select:{
                groups: true,
            }
        })

        console.log(userGroupsRelation[0]['groups'])

        // const userGroupsInformation = await prisma.group.findMany({
        //     where:{
        //         id:{
        //             contains: userGroupsRelation[0]['groups']
        //         }
        //     }
        // })

    }catch(error){
        console.log(error);
    }

    return rtnData;
}