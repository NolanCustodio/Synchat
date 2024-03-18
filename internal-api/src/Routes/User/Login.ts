import { prisma } from "../../Services/Prisma";

export default async function login(data: any){

    let rtnData = {
        password: '',
        sessionId: '',
        eventUUID: data.eventUUID
    }

    /**
     * data = {
     *  username:string
     *  action:'login'
     *  
     * }
    */
    
    const usernameExists = await prisma.user.findUnique({
        where:{username: data.username},
        select:{
            password: true,
            session:{
                select:{
                    sessionId: true,
                }
            }
        }
    });

    // console.log('current test',usernameExists);

    if (usernameExists !== null && usernameExists.session !== null){
        rtnData.password = usernameExists.password;
        rtnData.sessionId = usernameExists.session.sessionId;
    }

    return rtnData;
}