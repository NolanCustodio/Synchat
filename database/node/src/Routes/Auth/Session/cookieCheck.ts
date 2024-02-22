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

    const ageOfSession = (currnetDate.getTime() - cookieExists!.creationDate.getTime()) / (1000 * 60 * 60 * 24);

    if (ageOfSession < 7){
        //if session is less then 7 days old
        rtnData.isCookieUsed = true;
    }else{
        console.log('creation date older');
    }

    return rtnData;
}