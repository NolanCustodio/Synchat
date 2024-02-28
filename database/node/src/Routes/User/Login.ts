import { prisma } from "../../Services/Prisma";

import { updateSession } from "../Auth/Session/sessionHelpers";

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
    
    const usernameExists = await prisma.users.findUnique({
        where:{
            username: data.username,

        },
        include: {session: true},
    });

    // console.log('current test',usernameExists);

    if (usernameExists !== null && usernameExists.session !== null){
        rtnData.password = usernameExists.password;
        rtnData.sessionId = usernameExists.session.sessionId;
    }

    return rtnData;
}