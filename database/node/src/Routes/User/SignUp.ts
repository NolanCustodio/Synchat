import { prisma } from '../../Services/Prisma/index';


export default async function signUp(data: any){
    let rtnData = data;
    rtnData.duplicateFields = [];
    rtnData.isSuccess = true;
    // console.log('db query',data);

    try{
        
        const emailIsUnique = await prisma.users.findUnique({
            where:{
                email: data.email,
            },
        });

        const usernameIsUnique = await prisma.users.findUnique({
            where:{
                username: data.username,
            }
        })

        // console.log(emailIsUnique, usernameIsUnique);

        if (emailIsUnique !== null){
            rtnData.duplicateFields.push('email');
            rtnData.isSuccess = false;
        }

        if (usernameIsUnique !== null){
            rtnData.duplicateFields.push('username');
            rtnData.isSuccess = false;
        }

        if (rtnData.isSuccess){
            await prisma.users.create({
                data:{
                    username: data.username,
                    email: data.email,
                    password: data.password,
                }
            })
        }

        delete rtnData.password;
        delete rtnData.action;

    }catch(error){
        console.log('The error is:',error);
    }

    // rtnData = data;

    return rtnData;
}