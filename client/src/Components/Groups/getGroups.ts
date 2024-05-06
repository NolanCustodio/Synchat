import { getGroupsRequest } from "./apiRequests/groupRequest"
    
export async function getGroups(){
    const rtn = await getGroupsRequest();
    // console.log(rtn);


    return rtn;
}