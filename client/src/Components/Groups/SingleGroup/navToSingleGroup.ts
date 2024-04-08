import { unwrap } from "solid-js/store";

import { userGroups } from "../../../stores/groupStore";
import { setCurrentGroup } from "../Groups";

export function navFromURL(groupNameFromURL: string){
    const groupsArr = unwrap(userGroups);
    let rtnGroupObj:any = [];

    groupsArr.forEach((group:any) => {
        if (groupNameFromURL === group.groupName.replace(/\s+/g, '-')){
            // console.log(group);
            rtnGroupObj.push(group);
            setCurrentGroup(group);
        };
    });
    
    return rtnGroupObj;
}

function navFromButton(groupId: string){
    
}