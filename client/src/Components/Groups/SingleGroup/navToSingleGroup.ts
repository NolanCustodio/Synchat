import { unwrap } from "solid-js/store";

import { userGroups } from "../../../stores/groupStore";

import { getGroupRequest } from "../apiRequests/groupRequest";

export async function getGroupWithFullUUID(groupUUID: string){
    const response = await getGroupRequest(groupUUID, true);
    // console.log(response);
    return response.completeGroup;
}

export async function getGroupWithPartialUUID(urlGroupInfo: string){
    console.log(urlGroupInfo);
}

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