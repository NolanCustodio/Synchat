import { unwrap } from "solid-js/store";
import { createGroup, getGroups, getGroup } from "../../../API/Group/mainGroupFunctions";
import { newEventCreation, setEventDefault } from "../../../stores/eventStore";
import { newGroupCreation } from "../../../stores/groupStore";

export async function createGroupRequest(newGroupData: any, newEventData: any): Promise<any>{
    let rtnObj = {
        flag: false
    };

    try{
        const newGroupData = {
            action: "createGroup",
            groupMembers: newGroupCreation.groupMembers,
            groupName: newGroupCreation.groupName,
            eventInfo:{
                currentEvent: newEventCreation.eventName,
                startDate: newEventCreation.startDate,
                startTime: newEventCreation.startTime
            }
        }

        newGroupCreation.pageNumber = 0;

        //setNewGroupDefault();
        setEventDefault();

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

export async function getGroupRequest(groupId: string): Promise<any>{
    let rtnObj;
    try{
        const currentGroup = {
            action: 'getGroup',
            groupId: groupId
        }
        rtnObj = await getGroup(currentGroup);
        // console.log('resrr', response);

    }catch(error){
        console.log(error);
    }

    return rtnObj;
}