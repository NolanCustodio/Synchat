import { For, createSignal, Show, onMount, onCleanup} from "solid-js";

import { CreateEvent } from "./hoverCreateEvent";
import { SingleEventCard } from "./singleEventCard";

import { currentGroup } from "../../../../stores/groupStore"
import "../singleGroup.css"
import { unwrap } from "solid-js/store";

export function Events(){
    const [createNewEvent, setCreateNewEvent] = createSignal(false);
    const [eventsDropdown, setEventsDropdown] = createSignal(false);
    // const [eventsDropdown, setEventsDropdown] = createSignal(false);
    
    const handleClick = (event:any) =>{
        // console.log(event.clientX, event.clientY)
        // console.log(event.target.className);
        if(event.target.className !== "new-event-form"){
            setEventsDropdown(false);
        }
    }

    onMount(async() => {
        document.addEventListener('click', handleClick);
    })

    onCleanup(() => {
        document.removeEventListener('click', handleClick);
    })

    return(
        <div class="event-container">

            <Show when={createNewEvent()}>
                <CreateEvent/>
            </Show>

            {/* currentEvent */}
            <div>

            </div>

            <div>
                {/* dropdown */}
                <h3>Events</h3>
                <button>v</button>
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




