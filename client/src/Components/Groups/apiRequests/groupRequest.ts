import { createGroup, getGroups, getGroup } from "../../../API/Group/mainGroupFunctions";

export async function createGroupRequest(newGroupData: any): Promise<any>{
    let rtnObj = {
        flag: false
    };

    try{
        newGroupData.action = "createGroup";
        delete newGroupData.pageNumber;

        newGroupData.eventInfo = {
            currentEvent: newGroupData.currentEvent,
            startDate: newGroupData.startDate,
            startTime: newGroupData.startTime
        }

        delete newGroupData.currentEvent
        delete newGroupData.startDate
        delete newGroupData.startTime

        // console.log(newGroupData);
        const response = await createGroup(newGroupData);

    }catch (error){
        console.log(error);
    }

    return rtnObj;
}

export async function getGroupsRequest(): Promise<any>{
    let rtnObj: any = {
        groups : []
    }

    try{
        const getUserGroups = {
            action: 'getGroups',
        }
        const response = await getGroups(getUserGroups);
        rtnObj= response.userGroups;
    }catch(error){
        console.log(error);
    }

    return rtnObj
}

export async function getGroupRequest(groupId: string, isUuidComplete: boolean): Promise<any>{
    let rtnObj: any = {
        group:{},
        events:{},
        chat:{}
    }

    try{
        const currentGroup = {
            action: 'getGroup',
            isUuidComplete: isUuidComplete,
            groupId: groupId
        }
        const response = await getGroup(currentGroup);
        // console.log('resrr', response);

    }catch(error){
        console.log(error);
    }
}