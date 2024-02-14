import { prisma } from '../../Services/Prisma/index';


export default async function signUp(data: any){
    let rtnData = data;
    rtnData.uniqueFields = {
        username: false,
        email: false,
    };
    rtnData.action = false
    // console.log('db query',data);

    try{

        const usernameIsUnique = await prisma.users.findUnique({
            where:{
                username: data.username,
            }
        })
        
        const emailIsUnique = await prisma.users.findUnique({
            where:{
                email: data.email,
            },
        });

        // console.log('checking prisma bools',emailIsUnique, usernameIsUnique);
 
        if (usernameIsUnique === null){
            rtnData.uniqueFields.username = true;
        }

        if (emailIsUnique === null){
            rtnData.uniqueFields.email = true;
        }

        if (emailIsUnique === null && usernameIsUnique === null){
            rtnData.action = true;
        }


        if (rtnData.action){
            await prisma.users.create({
                data:{
                    username: data.username,
                    email: data.email,
                    password: data.password,
                }
            })
        }

        delete rtnData.password;
        delete rtnData.username;
        delete rtnData.email;

    }catch(error){
        console.log('The error is:',error);
    }

    // console.log(rtnData);

    return rtnData;
}