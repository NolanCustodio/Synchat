import { prisma } from '../../Services/Prisma/index';


export default async function SignUp(data: any){
    let rtnData;
    console.log(data);

    try{
        
        const isUnique = await prisma.users.findUnique({
            where:{
                email: data.email,
            },
        });

        if (isUnique === null){
            rtnData = await prisma.users.create({
                data:{
                    username: data.username,
                    email: data.email,
                    password: data.password
                }
            })
        }

    }catch(error){
        console.log('The error is:',error);
    }

    rtnData = data;

    return rtnData;
}