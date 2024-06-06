import { unwrap } from "solid-js/store";
import { newEventCreation } from "../../../../stores/eventStore";
import { addEvent } from "../../../../API/Event/eventControll";

export async function addEventRequest(){

    try{

        const response = await addEvent(unwrap(newEventCreation));

    }catch(error){
        console.log(error);
    }
}