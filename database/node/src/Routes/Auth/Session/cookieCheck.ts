import { prisma } from '../../../Services/Prisma';

export default async function cookieCheck(data: any){
    let rtnData = {
        isCookieUsed: false,
        eventUUID: data.eventUUID
    }

    const cookieExists = await prisma.session.findUnique({
        where:{
            sessionId: data.sessionId,
        }
    })

    const currnetDate = new Date();

    console.log((currnetDate.getTime() - cookieExists!.creationDate.getTime()) / (1000 * 60 * 60 * 24));

    if (cookieExists!.creationDate < currnetDate){
        console.log('creation date younger');
    }else{
        console.log('creation date older');
    }

    return rtnData;
}