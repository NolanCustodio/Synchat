import { For, createSignal, Show, onMount, onCleanup} from "solid-js";
import { Portal } from "solid-js/web";

import { CreateEvent } from "./hoverCreateEvent";
import { SingleEventCard } from "./singleEventCard";

import { currentGroup } from "../../../../stores/groupStore"
import "../singleGroup.css"
import { unwrap } from "solid-js/store";

export function Events(){
    const [createNewEvent, setCreateNewEvent] = createSignal(false);
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

    

    const toggleNewEvent = (event:any) => {
        const currentDiv = event.target.className;
        // console.log(currentDiv);

        if(currentDiv === "create-event-button"){
            setCreateNewEvent(true);
            return;
        }

        if(currentDiv !== "new-event-form"){
            setCreateNewEvent(false);
            return;
        }
    }

    onMount(async() => {
        document.addEventListener('click', toggleNewEvent);

    })

    onCleanup(() => {
        document.removeEventListener('click', toggleNewEvent);
    })

    return(
        <div class="event-container">

            <Show when={createNewEvent()}>
                <Portal>
                    <CreateEvent/>
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

                <button class="create-event-button"
                    onClick={(event:any) => {
                        toggleNewEvent(event);
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




