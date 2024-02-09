import { prisma } from "../../Services/Prisma";

export default async function login(data: any){
    let rtnData = data;
    rtnData.userInfo = {};
    // console.log(data);
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
    });

    // console.log('current test',usernameExists);

    if (usernameExists !== null){
        rtnData.userInfo.email = usernameExists.email;
        rtnData.userInfo.password = usernameExists.password;
    }

    return rtnData;
}