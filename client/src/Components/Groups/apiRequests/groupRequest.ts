import { createGroup, getGroups } from "../../../API/Group/createGroup";

export async function createGroupRequest(newGroupData: any): Promise<any>{
    let rtnObj = {
        flag: false
    };

    try{
        newGroupData.action = "createGroup";
        delete newGroupData.pageNumber;

        // console.log(newGroupData);
        const response = await createGroup(newGroupData);

    }catch (error){
        console.log(error);
    }

    return rtnObj;
}

export async function getGroupsRequest(): Promise<any>{
    let rtnObj = {
        flag: false
    }

    try{
        const getUserGroups = {
            action: 'getGroups',
        }
        const response = await getGroups(getUserGroups);
    }catch(error){
        console.log(error);
    }
}