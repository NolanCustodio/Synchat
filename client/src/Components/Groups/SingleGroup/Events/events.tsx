import { For, createSignal, Show } from "solid-js";

import CreateEvent from "./hoverCreateEvent";

import { currentGroup } from "../../../../stores/groupStore"
import "../singleGroup.css"

const singleEvent = (props: any) => {

    return(
        <div>
            Event Name: {props.eventName}
        </div>
    )
}


export function Events(eventsObj: any){
    const [eventsDropdown, setEventsDropdown] = createSignal(false);

    return(
        <div class="event-container">

            <CreateEvent/>

            {/* currentEvent */}
            <div>

            </div>

            {/* dropdown */}
            <h3>Events</h3>
            <For each={currentGroup.events}>
                {(event: any) => (
                    <div>
                        {event.eventName}
                    </div>
                )}
            </For>
        </div>
    )
}




