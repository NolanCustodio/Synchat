import { PrismaClient } from "@prisma/client/extension";

interface eventData{
    currentEvent: string,
    startDate: string,
    startTime:{
        hour: string | number,
        minute: string | number,
    }
}

export async function createEvent(eventData: eventData, groupId: string, prisma: PrismaClient){

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