import { CreateEvent } from "../../../Events/CreateEvent";
import { toggleNewEvent } from "./events";

import { addEventRequest } from "../apiRequests/eventRequests";

export function HoverCreateEvent(){
    const handleSumbit = (event:any) => {
        event.preventDefault();
        addEventRequest();
    }

    return(
        <div class="new-event-form">
            <div class="top-right-button-container">
                <button class="close-event-form-button"
                    onClick={(event) => {
                    toggleNewEvent(event, false);
                    }}
                >
                    x
                </button>
            </div>
            <div>
                <CreateEvent/>
            </div>

            <div class="submit-event-container">
                <button 
                    class="create-group-button"
                    onClick={(event:any) => {handleSumbit(event)}}
                >
                    Add Event
                </button>
            </div>
        </div>
    )
};