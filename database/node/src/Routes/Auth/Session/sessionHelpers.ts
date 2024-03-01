import { prisma } from '../../../Services/Prisma';
import { randomUUID } from 'crypto';

import { getSessionAge } from './getSessionAge';

export async function checkSession(data: any){
    let rtnData = {
        isSessionValid: false,
        sessionId : '',
        eventUUID: data.eventUUID
    }

    let sessionAgeInDays: number = 8;

    const sessionExists = await prisma.session.findUnique({
        where:{
            sessionId: data.sessionId,
        }
    });

    if (sessionExists !== null){
        rtnData.isSessionValid = true;
        sessionAgeInDays = getSessionAge(sessionExists.creationDate);
    }

    //if session is younger than 7 days
    if (rtnData.isSessionValid && sessionAgeInDays <= 7){
        rtnData.sessionId = data.sessionId;
    };
    
    //if session is older than 7 days
    if (rtnData.isSessionValid && sessionAgeInDays > 7){
        rtnData.sessionId = await updateSession(sessionExists!.userId);
    };

    return rtnData;
}

export async function updateSession(inputUserId: string): Promise<string>{
    const rtnUUID: string = randomUUID().toString();

    //make prisma connection
    const sessionExists = await prisma.session.update({
        where:{
            userId: inputUserId
        },
        data: {
            sessionId: rtnUUID,
            creationDate: new Date()
        }
    })
    return rtnUUID;
}