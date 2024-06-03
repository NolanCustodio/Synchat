import { CreateEvent } from "../../../Events/CreateEvent";
import { toggleNewEvent } from "./events";

export function HoverCreateEvent(){
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
                <button class="create-group-button bottom-button">
                    Add Event
                </button>
            </div>
        </div>
    )
};