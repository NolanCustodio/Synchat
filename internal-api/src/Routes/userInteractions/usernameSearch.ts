import { prisma } from "../../Services/Prisma"

export default async function usernameSearch(data: any){
    let rtnData: any = {
        eventUUID: data.eventUUID,
        flag: false
    }

    // console.log('inside query file',data);

    try{
        const usernames = await prisma.user.findMany({
            take: 10,
            where:{
                username:{
                    contains: data.username
                }
            },
            select:{
                username: true,
                userId: true,
            }
        })

        rtnData.usernames = usernames

    }catch (error){
        console.log(error);
    }

    console.log(rtnData.usernames);

    return rtnData;
}



