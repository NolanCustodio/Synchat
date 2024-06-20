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

        if (currentGroup === null){
            
        }

        console.log(currentGroup);
        
    }catch(error){

    }

    return rtnData;
}