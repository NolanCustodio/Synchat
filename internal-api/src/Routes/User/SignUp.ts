import { prisma } from '../../Services/Prisma/index';
import { randomUUID } from 'crypto';


export default async function signUp(data: any){
    console.log(data);

    let rtnData: any = {};
    
    rtnData.eventUUID = data.eventUUID
    rtnData.uniqueFields = {
        username: false,
        email: false,
    };
    rtnData.action = false;
    rtnData.session = '';
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

        const newUserSession = randomUUID().toString();

        if (rtnData.action){
            await prisma.users.create({
                data:{
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    session: {
                        create: {
                            sessionId: newUserSession
                        }
                    }
                }
            })

            rtnData.session = newUserSession;
        }

    }catch(error){
        console.log('The error is:',error);
    }

    // console.log(rtnData);

    return rtnData;
}