import { prisma } from '../../../Services/Prisma';
import { randomUUID } from 'crypto';

import { getSessionAge } from './getSessionAge';

export async function checkSession(data: any){
    let rtnData = {
        isSessionUsed: false,
        sessionId : '',
        eventUUID: data.eventUUID
    }

    let isSessionValid = false;
    let sessionAgeInDays: number = 8;

    const sessionExists = await prisma.session.findUnique({
        where:{
            sessionId: data.sessionId,
        }
    });

    if (sessionExists !== null){
        isSessionValid = true;
        rtnData.isSessionUsed = true;
        sessionAgeInDays = getSessionAge(sessionExists.creationDate);
    }

    //if session is younger than 7 days
    if (isSessionValid && sessionAgeInDays <= 7){
        rtnData.sessionId = data.sessionId;
    };
    
    //if session is older than 7 days
    if (isSessionValid && sessionAgeInDays > 7){
        const newSession = await updateSession(sessionExists!.userId);
        rtnData.sessionId = newSession;
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