import { PrismaClient } from "@prisma/client/extension";



function createRandomString(length: number): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
       result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export async function fakeUsers(amount: number, prismaInstance: PrismaClient){
    try{
        let fakeUserArr: any = []

        for (let i = 0; i < amount; i++){
            const newString = createRandomString(5);

            fakeUserArr.push({ 
                username: newString,
                email: newString,
                password: newString,
                session:{
                    create:{
                        sessionId: newString
                    }
                }
            })
        }

        for (let i = 0; i < fakeUserArr.length; i++){
            const newUser = await prismaInstance.user.create({
                data: fakeUserArr[i]
            })
            console.log(newUser)
        }
        
    }catch (error){
        console.log(error);
    }
}