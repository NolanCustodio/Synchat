import { For, createSignal, Show, onMount, onCleanup} from "solid-js";
import { unwrap } from "solid-js/store";
import { Portal } from "solid-js/web";

import { HoverCreateEvent } from "./HoverCreateEvent";
import { SingleEventCard } from "./singleEventCard";

import { currentGroup } from "../../../../stores/groupStore"

import "../singleGroup.css"
import "./events.css"

export const [createNewEvent, setCreateNewEvent] = createSignal(false);
export const toggleNewEvent = (event:any, state: boolean) => {
    setCreateNewEvent(state);
}

export function Events(){
    const [eventsDropdown, setEventsDropdown] = createSignal(false);
    // const [eventsDropdown, setEventsDropdown] = createSignal(false);
    const [eventsObj, setEventsObj] = createSignal<any>();
    
    
    const handleClick = (event:any) =>{
        // console.log(event.clientX, event.clientY)
        // console.log(event.target.className);
        if(event.target.className !== "event-toggle"){
            setEventsDropdown(false);
        }

        console.log(eventsDropdown());
    }

    const toggleEvents = (event:any) => {
        setEventsDropdown((state) => (!state))

    }

    return(
        <div class="event-container">

            <Show when={createNewEvent()}>
                <Portal>
                    <HoverCreateEvent/>
                </Portal>
            </Show>

            {/* currentEvent */}
            <div>

            </div>

            <div>
                {/* dropdown */}
                <h3>Events</h3>
                <button class="event-toggle"
                    onClick={(event:any) => {
                        event.preventDefault();
                        toggleEvents(event);
                    }}
                >
                    v
                </button>

                <button class="event-toggle"
                    onClick={(event:any) => {
                        toggleNewEvent(event, true);
                    }}
                >
                    +
                </button>
                <Show when={eventsDropdown()}>
                    <For each={unwrap(currentGroup.events)}>
                        {(event: any) => (
                            <SingleEventCard event={event}/>
                        )}
                    </For>
                </Show>
            </div>
        </div>
    )
}




