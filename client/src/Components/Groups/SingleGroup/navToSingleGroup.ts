import { unwrap } from "solid-js/store";

import { userGroups } from "../../../stores/groupStore";
import { setCurrentGroup } from "../Groups";

export function getGroupWithFullUUID(){

}

export function getGroupWithPartialUUID(){
    
}

export function setGroupFromGroupName(groupNameFromURL: string){
    const groupsArr = unwrap(userGroups);
    let rtnGroupArr:any = [];

    groupsArr.forEach((group:any) => {
        if (groupNameFromURL === group.groupName.replace(/\s+/g, '-')){
            // console.log(group);
            rtnGroupArr.push(group);
            setCurrentGroup(group);
        };
    });
    
    return rtnGroupArr;
}

function setGroupFromGroupId(groupId: string){
    const groupsArr = unwrap(userGroups);
    let rtnGroupObj: any = {};

    groupsArr.forEach((group:any) => {
        if (groupId === group.groupId){
            console.log(group);
        }
    })

    return rtnGroupObj;
}