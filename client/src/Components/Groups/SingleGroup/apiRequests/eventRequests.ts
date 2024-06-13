import { unwrap } from "solid-js/store";

import { newEventCreation } from "../../../../stores/eventStore";
import { currentGroup } from "../../../../stores/groupStore";


import { addEvent } from "../../../../API/Event/eventControll";


export async function addEventRequest(){

    try{
        const newEventInfo = {
            ...unwrap(newEventCreation),
            currentGroupId: currentGroup.groupId,
            action: 'addEvent'
        }


        const response = await addEvent(newEventInfo);

    }catch(error){
        console.log(error);
    }
}