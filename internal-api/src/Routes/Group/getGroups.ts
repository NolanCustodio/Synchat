import { prisma } from "../../Services/Prisma"

export async function getGroups(data: any){
    let rtnData: any = {
        eventUUID: data.eventUUID,
        userGroups: []
    }

    try{
        // console.log('etsstsd');

        const userGroups = await prisma.user.findFirst({
            where:{
                session:{
                    sessionId: data.userSessionId
                }
            },
            select:{
                groups:{
                    select:{
                        group:{
                            select:{
                                groupName: true,
                                id: true,
                                events: true
                            }
                        }
                    }
                }
            }
        })

        if (userGroups){
            let groupsArray: any[] = []

            userGroups.groups.forEach((item: any) => {
                console.log(item.group);
                groupsArray.push(item.group);
            })
            rtnData.userGroups = groupsArray;
        }
    
        // let groups = {}

        // userGroups?.groups.forEach((item:any) => {
        //     console.log(item.group.events);
        // })
        // console.log(userGroups?.groups);


    }catch(error){
        console.log(error);
    }

    return rtnData;
}