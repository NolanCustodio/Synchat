import { unwrap } from "solid-js/store";
import { userGroups } from "../../../stores/groupStore";

export function navFromURL(groupNameFromURL: string){
    const groupsArr = unwrap(userGroups);
    let rtnGroupObj:any = [];

    groupsArr.forEach((group:any) => {
        if (groupNameFromURL === group.groupName.replace(/\s+/g, '-')){
            rtnGroupObj.push(group)
        };
    });
    return rtnGroupObj;
}

function navFromButton(){

}