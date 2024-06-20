import { PrismaClient } from "@prisma/client/extension";

export async function createEvent(eventData: any, groupId: string, prisma: PrismaClient){

    const datetimeISO = new Date(`${eventData.startDate} ${eventData.startTime.hour}:${eventData.startTime.minute}`).toISOString();

    const newEvent = await prisma.event.create({
        data:{
            eventName: eventData.currentEvent,
            groupId: groupId,
            startDate: datetimeISO,
            isCurrent:{
                create:{
                    groupId: groupId
                }
            }
        }
    })

    //call setCurrentEvent
}