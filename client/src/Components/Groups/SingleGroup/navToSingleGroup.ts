import { unwrap } from "solid-js/store";

import { userGroups } from "../../../stores/groupStore";

export function navFromURL(){
    const groupsArr = unwrap(userGroups);
    const currentGroupName = (location.pathname).substring(8).replace(/-/g, ' ');

    let rtnGroupObj:any = []

    groupsArr.forEach((group:any) => {
        
        if (currentGroupName === group.groupName){
            
            rtnGroupObj.push(group)
            console.log(rtnGroupObj);
        }
    })
    console.log(rtnGroupObj);
    return rtnGroupObj;
}

function navFromButton(){

}