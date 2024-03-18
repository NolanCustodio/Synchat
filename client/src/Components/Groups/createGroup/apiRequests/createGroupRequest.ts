import { createGroup } from "../../../../API/Group/createGroup";

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