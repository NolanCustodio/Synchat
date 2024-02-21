import { prisma } from "../../Services/Prisma";

export default async function login(data: any){

    let rtnData = {
        username: '',
        email: '',
        password: '',
        session: '',
        eventUUID: ''
    }

    // console.log('current test',data.username);
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
        rtnData.username = usernameExists.username;
        rtnData.email = usernameExists.email;
        rtnData.password = usernameExists.password;
        rtnData.session = usernameExists.session.sessionId;
    }

    return rtnData;
}