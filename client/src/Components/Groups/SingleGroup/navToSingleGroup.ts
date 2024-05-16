import { unwrap } from "solid-js/store";
import { useNavigate } from "@solidjs/router";

import navigate from "../../Nav/Navigate";
import { userGroups } from "../../../stores/groupStore";

import { getGroupRequest } from "../apiRequests/groupRequest";

export async function getGroup(groupUUID: string){
    const response = await getGroupRequest(groupUUID);
    // console.log(response);

    return response.completeGroup;
}

// export async function getGroupFromURL(urlGroupInfo: string){
//     const response = await getGroupRequest(urlGroupInfo, true);
//     console.log(response);
//     // return {};
//     return response.completeGroup;
// }

// export function setGroupFromGroupName(groupNameFromURL: string){
//     const groupsArr = unwrap(userGroups);
//     let rtnGroupArr:any = [];

//     groupsArr.forEach((group:any) => {
//         if (groupNameFromURL === group.groupName.replace(/\s+/g, '-')){
//             // console.log(group);
//             rtnGroupArr.push(group);
//             setCurrentGroup(group);
//         };
//     });
    
//     return rtnGroupArr;
// }

// function setGroupFromGroupId(groupId: string){
//     const groupsArr = unwrap(userGroups);
//     let rtnGroupObj: any = {};

//     groupsArr.forEach((group:any) => {
//         if (groupId === group.groupId){
//             console.log(group);
//         }
//     })

//     return rtnGroupObj;
// }